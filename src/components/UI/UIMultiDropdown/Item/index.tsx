import type { FC } from "react";
import { UIMultiDropdownItemWrapper } from "./styles";
import { IField } from "../../../../models";

interface IUIMultiDropdownItemProps {
  label: string;
  id: string;
  isActive: boolean;
  onClick: ({ id, label }: IField) => void;
}

export const UIMultiDropdownItem: FC<IUIMultiDropdownItemProps> = ({
  id,
  label,
  isActive,
  onClick,
}) => {
  return (
    <UIMultiDropdownItemWrapper
      $isActive={isActive}
      id={id}
      onClick={(event) => {
        event.stopPropagation();
        onClick({ id: Number(id), label });
      }}
    >
      <span className="item-label roboto-regular">{label}</span>
    </UIMultiDropdownItemWrapper>
  );
};
