import { render, cleanup, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { Card } from '../../../../components/Card';
// eslint-disable-next-line import/extensions
import * as stories from '../../../../components/Button/Button.stories';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

const setupComponent = () =>
  render(
    <Card imageSrc="/image.jpeg" imageAlt="imageAlt" title="Example">
      Pseudo Text
    </Card>
  );

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    const ComposedStories = composeStories(stories);

    Object.keys(ComposedStories).forEach((storyName) => {
      const ComposedStory = ComposedStories[storyName];

      // Run axe
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<ComposedStory />);
        const results = await waitFor(() => axe(container));
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('UI Tests', () => {
    it('Card component should render without crashing', async () => {
      const screen = setupComponent();
      expect(screen.container).toBeDefined();
    });
    it('Card component should render correctly', async () => {
      const screen = setupComponent();

      await screen
        .findByRole('heading', { level: 3 })
        .then((title) => expect(title).toHaveTextContent(/Example/));

      await screen
        .findByAltText('imageAlt')
        .then((image) => expect(image).toBeInTheDocument());
    });
  });

  describe('Snapshots Tests', () => {
    it('should match a basic snapshot', () => {
      const { container } = setupComponent();
      expect(container).toMatchSnapshot();
    });
  });
});
