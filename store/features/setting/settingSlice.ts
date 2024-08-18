import { deleteASDataByKey, storeASData } from "@/utils/asyncStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  showOnboarding: boolean;
  isLoaded: boolean;
}

const initialState: SettingState = {
  showOnboarding: true,
  isLoaded: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    initSetting: (state, action: PayloadAction<Partial<SettingState>>) => {
      return { ...state, ...action.payload, isLoaded: true };
    },
    toggleOnboarding: (state) => {
      if (state.showOnboarding) {
        deleteASDataByKey("setting-show-onboarding");
      } else {
        storeASData("setting-show-onboarding", "show");
      }
      state.showOnboarding = !state.showOnboarding;
    },
  },
});

export const { initSetting, toggleOnboarding } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
