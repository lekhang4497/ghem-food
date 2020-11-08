import Constant from "./Constant";
import { CartItem } from "../store/CartStore";

const getCart: () => Record<string, CartItem> = () => {
  const localStorageCart = localStorage.getItem(Constant.LOCAL_STORAGE_CART);
  return localStorageCart === null ? {} : JSON.parse(localStorageCart);
};

export default { getCart };
