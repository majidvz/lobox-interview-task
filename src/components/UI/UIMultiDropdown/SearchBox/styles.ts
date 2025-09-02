import styled from "styled-components";

interface IUIMultiDropdownSearchBoxWrapperProps {
  $isActive: boolean;
}

export const UIMultiDropdownSearchBoxWrapper = styled.div<IUIMultiDropdownSearchBoxWrapperProps>`
  width: 100%;
  height: 48px;
  border: 1px solid;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-color: ${(props) => (props.$isActive ? "#9CA8DC" : "#ededed")};
  box-shadow: ${(props) =>
    props.$isActive ? "0 0 0 2px #D5DFFF" : "0 0 0 0 #D5DFFF"};
  transition: all ease 0.25s;
  cursor: pointer;

  .search-box-icon-wrapper {
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-box-icon {
      transition: all ease 0.25s;
      transform: ${(props) =>
        props.$isActive ? "rotate(180deg)" : "rotated(0deg)"};
    }
  }

  .search-box-input {
    all: unset;
    font-size: 14px;
    padding-left: 12px;
  }
`;
