import { describe, expect, it } from 'vitest';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { DismissableBlurb } from './DismissableBlurb';
import { Content, removeElement } from './App';

describe('DismissableBlurb', () => {
  it('should render a dismissableBlurb component', () => {
    render(
      <DismissableBlurb removeElement={removeElement}>
        <Content />
      </DismissableBlurb>
    );

    const x = screen.getByText('X');
    const divElement = screen.getByText(/Welcome/);
    fireEvent.click(x);
    expect(divElement).not.toBeInTheDocument();
  });
});
