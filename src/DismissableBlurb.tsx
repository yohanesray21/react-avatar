import { PropsWithChildren } from 'react';

type BlurbProps = PropsWithChildren<{
  removeElement: () => void;
}>;

export const DismissableBlurb = ({ children, removeElement }: BlurbProps) => {
  return <div data-testId="blurb">{children}</div>;
};
