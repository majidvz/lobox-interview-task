import axios from "axios";
import { IField } from "../models";
import { ENDPOINTS } from "./endpoints";

export class FieldsService {
  async getFields() {
    const endpoint = ENDPOINTS.GET_FIELDS;

    try {
      const response = await axios.get<IField[]>(endpoint);
      return response;
    } catch (error) {
      throw console.log(error);
    }
  }
}
