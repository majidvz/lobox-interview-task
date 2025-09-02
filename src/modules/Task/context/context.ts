import { createContext, useContext } from "react";
import { ITaskContext } from "../models";

export const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const useTaskContext = () => {
  const data = useContext(TaskContext);

  if (data) return data;
  else throw new Error("Task context is not existed");
};
