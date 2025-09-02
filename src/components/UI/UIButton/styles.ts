import styled from "styled-components";
import { IButtonColor } from "./types";

interface UIButtonWrapperProps {
  $color: IButtonColor;
}

export const UIButtonWrapper = styled.button<UIButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.$color === "primary"
      ? "#5084ed"
      : props.$color === "secondary"
      ? "#fff"
      : ""};
  height: 48px;
  padding: 0 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none !important;

  .ui-button-icon-after {
    transition: all 0.3s ease;
  }

  .ui-button-label {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    transform: scale(1.2);

    .ui-button-icon-after {
      opacity: 0;
      transform: translateX(40px);
    }
  }
`;
