import { DefaultLayout } from "@/components/Layout/DefaultLayout";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <DefaultLayout>
      <Stack>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </DefaultLayout>
  );
};

export default Layout;
