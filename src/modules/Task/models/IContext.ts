import type { Dispatch, SetStateAction } from "react";
import { IField } from "../../../models";

export interface ITaskContext {
  value: {
    fields: IField[];
  };
  dispatch: {
    setFields: Dispatch<SetStateAction<IField[]>>;
  };
}
