import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { ReactNode, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { StoreProvider } from "@/store/StoreProvider";
import { RootState } from "@/store/store";
import { initSetting } from "@/store/features/setting/settingSlice";
import { getASDataByKey } from "@/utils/asyncStorage";
import { SETTINGS } from "@/constants/settings";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StoreProvider>
        <LoadSetting>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(app)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="(aux)" options={{ headerShown: false }} />
          </Stack>
        </LoadSetting>
      </StoreProvider>
    </GestureHandlerRootView>
  );
}

const LoadSetting = ({ children }: { children: ReactNode }) => {
  const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Sevillana: require("../assets/fonts/Sevillana-Regular.ttf"),
  });

  const loadedSetting = useSelector(
    (state: RootState) => state.setting.isLoaded
  );

  const dispatch = useDispatch();

  const isDoneLoad = (loaded || error) && loadedSetting;

  useEffect(() => {
    const getInitSettings = async () => {
      const showOnboarding = await getASDataByKey(SETTINGS.SHOW_ONBOARD_KEY);
      dispatch(
        initSetting({
          showOnboarding: !!showOnboarding,
        })
      );
    };

    getInitSettings();
  }, []);

  useEffect(() => {
    if (isDoneLoad) {
      SplashScreen.hideAsync();
    }
  }, [isDoneLoad]);

  if (!isDoneLoad) {
    return null;
  }

  return children;
};
