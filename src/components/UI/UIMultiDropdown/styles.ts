import styled from "styled-components";

interface UIMultiDropdownWrapperProps {
  $isSearchBoxActive: boolean;
}

export const UIMultiDropdownWrapper = styled.div<UIMultiDropdownWrapperProps>`
  width: 300px;
  position: relative;
  border-radius: 12px;

  .dropdown-list-wrapper {
    transition: all ease 0.25s;
    visibility: ${(props) => (props.$isSearchBoxActive ? "visible" : "hidden")};
    opacity: ${(props) => (props.$isSearchBoxActive ? "1" : "0")};
    transform: ${(props) =>
      props.$isSearchBoxActive ? "translateY()" : "translateY(4px)"};
    position: absolute;
    top: calc(100% + 6px);
    width: 100%;
    border-radius: 12px;
    border: 1px solid #ededed;
    background-color: #fff;
    margin: 0;
    padding: 0;
    padding: 8px 12px;
    box-sizing: border-box;
    max-height: 186px;
    overflow: auto;
  }
`;
