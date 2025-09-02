import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IField } from "../../../models";
import { FieldsService } from "../../../service";
import { TaskContext } from "./context";

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [fields, setFields] = useState<IField[]>([]);

  const getFields = async () => {
    try {
      const { getFields } = new FieldsService();
      const response = await getFields();

      if (response && response.data) {
        setFields(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  const contextValue = {
    value: { fields },
    dispatch: { setFields },
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};
