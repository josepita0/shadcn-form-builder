import { Children, ReactNode } from "react";

export const Show = (props) => {
  let when = null;
  let otherwise = null;

  Children.forEach(props?.children, (children) => {
    if (children.props.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.props.isTrue === true) {
      when = children;
    }
  });
  return when || otherwise;
};

Show.If = ({ isTrue, children }: { isTrue?: boolean; children?: ReactNode }) =>
  isTrue && children;
Show.Else = ({
  render,
  children,
}: {
  render?: ReactNode;
  children?: ReactNode;
}) => render || children;
