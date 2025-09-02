import { UIMultiDropdown } from "../../components/UI";
import { useTaskContext } from "./context";

export const Task = () => {
  const { value } = useTaskContext();
  return <UIMultiDropdown options={value.fields} />;
};
