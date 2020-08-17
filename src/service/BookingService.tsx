import {AxiosResponse} from "axios";

const axios = require('axios').default;

const URL = process.env.REACT_APP_API_URL;
const BOOKING_PATH = process.env.REACT_APP_API_BOOKING_PATH;

export interface BookingInformation {
  name: string;
  phone: string;
  numberOfPeople?: number;
  bookingTime: Date;
  note?: string;
}

export interface BookingRequest {
  customerName: string;
  phoneNumber: string;
  numberOfPeople?: number;
  bookingTime: number;
  note?: string;
}

export interface BookingResponse {
  code: number,
  message: string
}

export const bookTable = async (booking: BookingRequest): Promise<AxiosResponse<BookingResponse>> => {
  const url = String(URL) + String(BOOKING_PATH);
  return await axios.post(url, booking);
};
