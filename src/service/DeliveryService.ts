import axios, { AxiosResponse } from "axios";
import {CartItem} from "../store/CartStore";

const URL = process.env.REACT_APP_API_URL;
const PATH = process.env.REACT_APP_API_DELIVERY_PATH;

export interface DeliveryInformation {
  name: string;
  phone: string;
  address: string;
}

export interface DeliveryRequest {
  customerName: string;
  phoneNumber: string;
  address: string;
  details: Array<CartItem>;
}

export interface DeliveryResponse {
  code: number;
  message: string;
  deliveryId: string;
}

export const orderDelivery = async (
  req: DeliveryRequest
): Promise<AxiosResponse<DeliveryResponse>> => {
  const url = String(URL) + String(PATH);
  return await axios.post(url, req);
};
