import { render, cleanup, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as stories from '../../../../components/Button/Button.stories';
import { ButtonProps, CustomButton } from '../../../../components/Button';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

const setupComponent = ({
  onClick,
  type = 'submit',
  variant = 'contained',
  size = 'small',
  disabled = false,
  testId = 'id',
  color = 'primary',
  children = 'children',
}: ButtonProps) =>
  render(
    <CustomButton
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      data-testid={testId}
      color={color}
    >
      {children}
    </CustomButton>
  );

describe('Button', () => {
  let spy = jest.fn();
  beforeEach(() => {
    spy = jest.fn();
  });
  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    const ComposedStories = composeStories(stories);

    for (const storyName in ComposedStories) {
      const ComposedStory = ComposedStories[storyName];

      // Run axe
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<ComposedStory />);
        const results = await waitFor(() => axe(container));
        expect(results).toHaveNoViolations();
      });
    }
  });
  describe('UI Tests', () => {
    it('Button component should render without crashing', async () => {
      const { container } = setupComponent({ onClick: spy });
      expect(container).toBeDefined();
    });
    it('Button component should trigger onClick by click', async () => {
      const screen = setupComponent({ onClick: spy });
      await screen
        .findByRole('button', { name: 'children' })
        .then((button) =>
          userEvent.click(button).then(() => expect(spy).toHaveBeenCalled())
        );
    });
  });

  describe('Snapshots Tests', () => {
    it('Button should match a basic snapshot', () => {
      const { container } = setupComponent({ onClick: spy });
      expect(container).toMatchSnapshot();
    });

    it('Button should match a text button snapshot', () => {
      const { container } = setupComponent({ onClick: spy, variant: 'text' });
      expect(container).toMatchSnapshot();
    });
    it('Button should match a contained button snapshot', () => {
      const { container } = setupComponent({
        onClick: spy,
        variant: 'contained',
      });
      expect(container).toMatchSnapshot();
    });
    it('Button should match a outlined button snapshot', () => {
      const { container } = setupComponent({
        onClick: spy,
        variant: 'outlined',
      });
      expect(container).toMatchSnapshot();
    });
    it('Button should match a disabled button snapshot', () => {
      const { container } = setupComponent({ onClick: spy, disabled: true });
      expect(container).toMatchSnapshot();
    });
  });
});
