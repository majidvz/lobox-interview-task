import { useEffect, useRef, type ChangeEvent, type FC } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { UIMultiDropdownSearchBoxWrapper } from "./styles";

interface IUIMultiDropdownSearchBoxProps {
  isActive: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UIMultiDropdownSearchBox: FC<IUIMultiDropdownSearchBoxProps> = ({
  isActive,
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive, inputRef]);

  return (
    <UIMultiDropdownSearchBoxWrapper $isActive={isActive}>
      <input
        ref={inputRef}
        className="search-box-input roboto-regular"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <div className="search-box-icon-wrapper">
        <IconChevronDown
          className="search-box-icon"
          size={24}
          color="#90959B"
        />
      </div>
    </UIMultiDropdownSearchBoxWrapper>
  );
};
