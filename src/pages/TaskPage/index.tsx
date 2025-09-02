import type { FC } from "react";
import { Task } from "../../modules";
import { TaskProvider } from "../../modules/Task/context";

export const TaskPage: FC = () => {
  return (
    <TaskProvider>
      <Task />
    </TaskProvider>
  );
};
