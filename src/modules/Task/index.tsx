import { UIMultiDropdown } from "../../components/UI";
import { useTaskContext } from "./context";

export const Task = () => {
  const { value, dispatch } = useTaskContext();
  console.log([...value.fields]);

  const onSaveHandler = (newLabel: string) => {
    const newFieldsList = [
      ...value.fields,
      { id: Math.ceil(Math.random() * 1000), label: newLabel },
    ];
    localStorage.setItem("fields", JSON.stringify(newFieldsList));
    dispatch.setFields(newFieldsList);
  };

  return <UIMultiDropdown options={value.fields} onSave={onSaveHandler} />;
};
