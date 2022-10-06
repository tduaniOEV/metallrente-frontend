import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';

Given(
  'I navigate to the homepage',
  { timeout: 60 * 1000 },
  // eslint-disable-next-line no-unused-vars
  async function (this: ICustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    const page = this.page!;
    await page.goto(config.BASE_URL);
    return true;
  }
);

// eslint-disable-next-line no-unused-vars
When('The page is loaded', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.waitForSelector('#__next');
});
When(
  'I click on the documentation button',
  // eslint-disable-next-line no-unused-vars
  async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator('text=Documentation →').click();
  }
);
// eslint-disable-next-line no-unused-vars
Then('I see the documentation page', async function (this: ICustomWorld) {
  const page = this.page!;
  const url = await page.url();
  expect(url).toBe('https://nextjs.org/docs');
});
