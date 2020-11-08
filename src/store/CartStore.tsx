import React, { createContext, Dispatch, Reducer, useReducer } from "react";
import Constant from "../constant/Constant";
import Utils from "../constant/Utils";

export interface CartContext {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
}

const cartStore = createContext<CartContext>({} as CartContext);
const { Provider } = cartStore;

export enum CartActionType {
  UPDATE,
}

interface CartAction {
  type: CartActionType;
  dishId: string;
  quantity: number;
}

export interface CartItem {
  dishId: string;
  quantity: number;
}

export interface CartState {
  items: Record<string, CartItem>;
}

const CartProvider = ({ children }: { children: any }) => {
  const initialItems = Utils.getCart();
  const [cartState, cartDispatch] = useReducer<Reducer<CartState, CartAction>>(
    (state: CartState, action: CartAction) => {
      switch (action.type) {
        case CartActionType.UPDATE:
          const newItems = { ...state.items };
          if (action.quantity === 0) {
            delete newItems[action.dishId];
          } else {
            newItems[action.dishId] = {
              dishId: action.dishId,
              quantity: action.quantity,
            };
          }
          localStorage.setItem(
            Constant.LOCAL_STORAGE_CART,
            JSON.stringify(newItems)
          );
          return { items: newItems };
        default:
          throw new Error();
      }
    },
    { items: initialItems }
  );

  return <Provider value={{ cartState, cartDispatch }}>{children}</Provider>;
};

export { cartStore, CartProvider };
