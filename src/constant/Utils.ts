import Constant from "./Constant";
import {CartItem} from "../store/CartStore";

const getCart: () => Record<string, CartItem> = () => {
  const localStorageCart = localStorage.getItem(Constant.LOCAL_STORAGE_CART);
  return localStorageCart === null ? {} : JSON.parse(localStorageCart);
};

const toPriceString = (price: number) => {
  if (price === 0) {
    return "Liên hệ";
  }
  return `${price.toLocaleString()} VND`
}

export default {getCart, toPriceString};
