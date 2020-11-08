import axios, {AxiosResponse} from "axios";
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

export interface DetailData {
  dishId: string;
  quantity: number;
  note: string;
}

export interface DeliveryData {
  id: number;
  customerName: string;
  phoneNumber: string;
  address: string;
  orderDetails: Array<DetailData>;
}

export interface GetDeliveryResponse {
  code: number;
  message: string;
  data: Array<DeliveryData>;
}

export const orderDelivery = async (
  req: DeliveryRequest
): Promise<AxiosResponse<DeliveryResponse>> => {
  const url = String(URL) + String(PATH);
  return await axios.post(url, req);
};

export const getDelivery = async (year: number, month: number, date: number): Promise<AxiosResponse<GetDeliveryResponse>> => {
  const url = String(URL) + String(PATH);
  return await axios.get(url, {
    params: {
      year, month, date
    }
  });
};
