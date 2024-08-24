import { IDefaultCustomizes } from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";

export type ItemDetail = {
  itemId: string;
  numberOfItem: number;
  customizes: IDefaultCustomizes;
} | null;

export interface OrderState {
  selectedMenuItem: string | null;
  itemOrderDetail: ItemDetail;
}

const initialState: OrderState = {
  selectedMenuItem: null,
  itemOrderDetail: null,
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
  },
});

export const { openModal, closeModal, initDetail, updateCustomize } =
  orderSlice.actions;

export const orderReducer = orderSlice.reducer;
