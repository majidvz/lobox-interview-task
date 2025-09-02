import styled from "styled-components";

export const UIButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  background-color: #5084ed;
  height: 48px;
  padding: 0 24px;
  border-radius: 12px;
  transition: all 0.3s ease;

  .ui-button-icon-after {
    transition: all 0.3s ease;
  }

  .ui-button-label {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    transform: scale(1.2);

    .ui-button-icon-after {
      transform: translateX(40px);
    }
  }
`;
