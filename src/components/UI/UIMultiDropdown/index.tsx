import { useEffect, useState, type ChangeEvent, type FC } from "react";
import { IField } from "../../../models";
import { UIMultiDropdownWrapper } from "./styles";
import { UIMultiDropdownSearchBox } from "./SearchBox";
import { UIMultiDropdownItem } from "./Item";

interface IUIMultiDropdownProps {
  options: IField[];
  placeholder: string;
  defaultValue: string;
}

export const UIMultiDropdown: FC<IUIMultiDropdownProps> = ({
  options,
  placeholder,
}) => {
  const [isSearchBoxActive, setIsSearchBoxActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined
  );
  const [searchBoxValue, setSearchBoxValue] = useState<string>(placeholder);
  const [listItems, setListItems] = useState<IField[]>(options);

  useEffect(() => {
    setListItems(options);
  }, [options]);

  const searchBoxClickHandler = () => {
    setIsSearchBoxActive(!isSearchBoxActive);

    if (isSearchBoxActive && searchBoxValue === placeholder) {
      setSearchBoxValue("");
    }
  };

  const searchBoxOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchBoxValue(event.target.value);
    const filteredItem = options.filter((option) =>
      option.label.includes(event.target.value)
    );

    if (filteredItem.length > 0) setListItems(filteredItem);
    else setListItems([]);
  };

  const dropdownItemClickHandler = ({ id, label }: IField) => {
    event?.stopPropagation();
    setSelectedItem(id);
    setSearchBoxValue(label);
    setIsSearchBoxActive(false);
  };

  return (
    <UIMultiDropdownWrapper
      onClick={searchBoxClickHandler}
      $isSearchBoxActive={isSearchBoxActive}
    >
      <UIMultiDropdownSearchBox
        isActive={isSearchBoxActive}
        value={searchBoxValue}
        onChange={searchBoxOnChangeHandler}
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
          <span className="roboto-regular">Add {`"${searchBoxValue}"`}</span>
        )}
      </ul>
    </UIMultiDropdownWrapper>
  );
};
