import { type FC, type ReactNode, type RefObject } from "react";
import { UIButtonWrapper } from "./styles";
import { IButtonColor } from "./types";

interface IUIButtonProps {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  children: ReactNode;
  ref?: RefObject<HTMLButtonElement | null>;
  color: IButtonColor;
  onClick?: () => void;
}

export const UIButton: FC<IUIButtonProps> = ({
  children,
  ref,
  iconBefore,
  iconAfter,
  onClick,
  color,
}) => {
  return (
    <UIButtonWrapper ref={ref} $color={color} onClick={onClick}>
      {iconBefore}
      {children}
      {iconAfter}
    </UIButtonWrapper>
  );
};
