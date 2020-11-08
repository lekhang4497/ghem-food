import axios, {AxiosResponse} from "axios";

const URL = process.env.REACT_APP_API_URL;
const BOOKING_PATH = process.env.REACT_APP_API_BOOKING_PATH;

export interface BookingFormValue {
  name: string;
  phone: string;
  numberOfPeople?: number;
  bookingTime: Date;
  note?: string;
}

export interface BookingInfo {
  customerName: string;
  phoneNumber: string;
  numberOfPeople?: number;
  bookingTime: number;
  note?: string;
}

export interface BookingData {
  id: number;
  customerName: string;
  phoneNumber: string;
  numberOfPeople?: number;
  bookingTime: number;
  note?: string;
}

export interface GetBookingResponse {
  code: number;
  message: string;
  data: Array<BookingData>;
}

export interface BookingResponse {
  code: number;
  message: string;
}

export const bookTable = async (
  booking: BookingInfo
): Promise<AxiosResponse<BookingResponse>> => {
  const url = String(URL) + String(BOOKING_PATH);
  return await axios.post(url, booking);
};

export const getBooking = async (year: number, month: number, date: number): Promise<AxiosResponse<GetBookingResponse>> => {
  const url = String(URL) + String(BOOKING_PATH);
  return await axios.get(url, {
    params: {
      year, month, date
    }
  });
};
