import { ensureFile, pathExists } from 'fs-extra';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import * as fs from 'fs';
import { writeFileSync } from 'fs';
import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';

export const compareToBaseSnapshot = async (
  screenshot: Buffer,
  name: string,
  customWorld: ICustomWorld,
  threshold?: { threshold: number }
) => {
  let baseImage;
  const baseImagePath = `tests/e2e/screenshots/${customWorld.feature?.uri}/${process.platform}/${config.browser}/${name}.png`;
  const baseImgExist = await pathExists(baseImagePath);
  if (baseImgExist) {
    baseImage = PNG.sync.read(fs.readFileSync(baseImagePath));
  } else {
    await ensureFile(baseImagePath);
    writeFileSync(baseImagePath, screenshot);
    throw new Error(
      `The base Image doesn't exist, a screenshot was taken to ${baseImagePath} so it can be used for next run`
    );
  }
  const img1 = PNG.sync.read(screenshot);
  const difference = getDifference(img1, baseImage, threshold);
  await reportDifference(difference, customWorld);
};

// Get differences between images
export const getDifference = (
  img1: PNG,
  img2: PNG,
  threshold = config.IMG_THRESHOLD
) => {
  const { width, height } = img2;
  const diff = new PNG({ width, height });
  const difference = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    threshold
  );
  if (difference > 0) {
    return PNG.sync.write(diff);
  }
  return undefined;
};

// If there's any difference adds a screenshots showing them to the cucumber report and fails the test
const reportDifference = (
  difference: Buffer | undefined,
  customWorld: ICustomWorld
) => {
  if (difference) {
    customWorld.attach(difference, 'image/png;base64');
    throw new Error('Images are not matching');
  }
};
