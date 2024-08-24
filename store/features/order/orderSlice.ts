import { createSlice } from "@reduxjs/toolkit";

export type ItemDetail = {
  numberOfItem: number;
  detail: {
    [key: string]: {
      value: string;
      cost?: number;
      currency?: string;
    };
  };
} | null;

export interface OrderState {
  showModal: boolean;
  itemDetail: ItemDetail;
}

const initialState: OrderState = {
  showModal: false,
  itemDetail: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    initDetail: (state, action) => {
      state.itemDetail = {
        numberOfItem: 1,
        detail: action.payload,
      };
    },
    updateDetail: (state, action) => {
      if (state.itemDetail) {
        if (action.payload.numberOfItem) {
          state.itemDetail.numberOfItem = action.payload.numberOfItem;
        }

        if (action.payload.detail) {
          state.itemDetail.detail = {
            ...state.itemDetail.detail,
            ...action.payload.detail,
          };
        }
      }
    },
  },
});

export const { toggleModal, initDetail, updateDetail } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
