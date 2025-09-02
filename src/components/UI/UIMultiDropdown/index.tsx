import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FC,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { IconPlus } from "@tabler/icons-react";
import { IField } from "../../../models";
import { UIButton } from "../UIButton";
import { UIMultiDropdownWrapper } from "./styles";
import { UIMultiDropdownSearchBox } from "./SearchBox";
import { UIMultiDropdownItem } from "./Item";

interface IUIMultiDropdownProps {
  options: IField[];
  onSave?: (value: string) => void;
}

export const UIMultiDropdown: FC<IUIMultiDropdownProps> = ({
  options,
  onSave,
}) => {
  const [isSearchBoxActive, setIsSearchBoxActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined
  );
  const [searchBoxValue, setSearchBoxValue] = useState<string>("Select");
  const [listItems, setListItems] = useState<IField[]>(options);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      )
        setIsSearchBoxActive(false);
    };

    document.addEventListener("mousedown", outsideClickHandler);

    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, []);

  useEffect(() => {
    setListItems(options);
  }, [options]);

  const searchBoxClickHandler = (e: ReactMouseEvent) => {
    const target = e.target as HTMLElement;
    const clickedInsideList = target.closest(".dropdown-list-wrapper");
    if (clickedInsideList) return;

    const nextIsActive = !isSearchBoxActive;
    setIsSearchBoxActive(nextIsActive);

    if (nextIsActive) {
      if (searchBoxValue === "Select") setSearchBoxValue("");
      setListItems(options);
    } else {
      if (searchBoxValue === "") setSearchBoxValue("Select");
    }
  };

  const searchBoxOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchBoxValue(value);
    const filteredItem = options.filter((option) => {
      const splittedValue = value.toLowerCase().split("");
      const splittedOptionLabel = option.label.toLowerCase().split("");

      return splittedValue.every((char) => splittedOptionLabel.includes(char));
    });

    if (filteredItem.length > 0) setListItems(filteredItem);
    else setListItems([]);
  };

  const dropdownItemClickHandler = ({ id, label }: IField) => {
    setSelectedItem(id);
    setSearchBoxValue(label);
    setIsSearchBoxActive(false);
  };

  const searchBoxKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && onSave) {
      onSave(searchBoxValue);
    }

    if (event.key === "Escape") {
      setIsSearchBoxActive(false);
    }
  };

  return (
    <UIMultiDropdownWrapper
      ref={wrapperRef}
      onClick={searchBoxClickHandler}
      $isSearchBoxActive={isSearchBoxActive}
    >
      <UIMultiDropdownSearchBox
        isActive={isSearchBoxActive}
        value={searchBoxValue}
        onChange={searchBoxOnChangeHandler}
        onKeyDown={searchBoxKeyDownHandler}
      />

      <ul className="dropdown-list-wrapper">
        {listItems.length > 0 ? (
          listItems.map((option) => (
            <UIMultiDropdownItem
              key={option.id}
              onClick={() => {
                dropdownItemClickHandler(option);
              }}
              id={option.id.toString()}
              label={option.label}
              isActive={option.id === selectedItem}
            />
          ))
        ) : (
          <UIButton
            color="secondary"
            onClick={onSave ? () => onSave(searchBoxValue) : () => {}}
            iconBefore={<IconPlus size={20} color="#000" />}
          >
            <span className="roboto-regular">Add {`"${searchBoxValue}"`}</span>
          </UIButton>
        )}
      </ul>
    </UIMultiDropdownWrapper>
  );
};
