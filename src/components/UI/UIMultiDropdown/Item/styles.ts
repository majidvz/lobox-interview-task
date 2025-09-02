import styled from "styled-components";

interface IUIMultiDropdownItemWrapperProps {
  $isActive: boolean;
}

export const UIMultiDropdownItemWrapper = styled.li<IUIMultiDropdownItemWrapperProps>`
  cursor: pointer;
  margin: 0;
  width: 100%;
  padding: 6px 12px;
  list-style: none;
  min-height: 34px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${(props) => (props.$isActive ? "#F2F4FF" : "transparent")};
  transition: all ease 0.25s;

  .item-label {
    transition: all ease 0.25s;
    display: block;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => (props.$isActive ? "#627AD4" : "#7C8089")};
  }

  &:hover {
    background-color: #f2f4ff75;

    .item-label {
      color: #627ad4;
    }
  }
`;
