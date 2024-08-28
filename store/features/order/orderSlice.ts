import { IDefaultCustomizes } from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";

import { randomUUID } from "expo-crypto";

export type ItemDetail = {
  itemId: string;
  numberOfItem: number;
  customizes: IDefaultCustomizes;
};

type CartItem = ItemDetail & { id: string };

export interface OrderState {
  selectedMenuItem: string | null;
  itemOrderDetail: ItemDetail | null;
  cart: CartItem[];
}

const initialState: OrderState = {
  selectedMenuItem: null,
  itemOrderDetail: null,
  cart: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.selectedMenuItem = action.payload;
    },
    closeModal: (state) => {
      state.selectedMenuItem = null;
    },
    initDetail: (state, action) => {
      state.itemOrderDetail = {
        numberOfItem: 1,
        ...action.payload,
      };
    },
    updateCustomize: (state, action) => {
      if (state.itemOrderDetail) {
        if (action.payload.numberOfItem) {
          state.itemOrderDetail.numberOfItem = action.payload.numberOfItem;
        }

        if (action.payload.size) {
          state.itemOrderDetail.customizes.size = action.payload.size;
        }

        if (action.payload.toppings) {
          state.itemOrderDetail.customizes.toppings = action.payload.toppings;
        }
      }
    },
    addItemToCart: (state) => {
      if (state.itemOrderDetail) {
        state.cart.push({
          ...state.itemOrderDetail,
          id: randomUUID(),
        });

        state.selectedMenuItem = null;
      }
    },
    increaseCartItem: (state, action) => {
      const itemId = action.payload;

      const foundItem = state.cart.find((item) => item.id === itemId);

      if (foundItem) {
        foundItem.numberOfItem++;
      }
    },
    decreaseCartItem: (state, action) => {
      const itemId = action.payload;

      const foundItem = state.cart.find((item) => item.id === itemId);

      if (foundItem && foundItem.numberOfItem > 1) {
        foundItem.numberOfItem--;
      }

      if (foundItem && foundItem.numberOfItem === 1) {
        state.cart = state.cart.filter((item) => item.id);
      }
    },

    resetCart: () => {
      return initialState;
    },
  },
});

export const {
  openModal,
  closeModal,
  initDetail,
  updateCustomize,
  addItemToCart,
  increaseCartItem,
  decreaseCartItem,
  resetCart,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
