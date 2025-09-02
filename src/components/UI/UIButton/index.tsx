import { type FC, type ReactNode, type RefObject } from "react";
import { UIButtonWrapper } from "./styles";

interface IUIButtonProps {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  children: ReactNode;
  ref?: RefObject<HTMLButtonElement | null>;
}

export const UIButton: FC<IUIButtonProps> = ({
  children,
  ref,
  iconBefore,
  iconAfter,
}) => {
  return (
    <UIButtonWrapper ref={ref}>
      {iconBefore}
      {children}
      {iconAfter}
    </UIButtonWrapper>
  );
};
