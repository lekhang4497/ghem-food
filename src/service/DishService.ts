import axios, {AxiosResponse} from "axios";
import {DishInformation} from "../assets/dishes";

const URL = process.env.REACT_APP_API_URL;
const PATH = process.env.REACT_APP_API_DISH_PATH;

export interface DishResponse {
  code: number;
  message: string;
  data: Array<DishInformation>
}

export const fetchAllDish = async (): Promise<AxiosResponse<DishResponse>> => {
  const url = String(URL) + String(PATH);
  return await axios.get(url);
};
