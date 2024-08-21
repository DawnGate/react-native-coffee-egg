import { MenuFooter } from "@/components/Layout/MenuFooter";
import { Tabs } from "expo-router";

const AppLayout = () => {
  return (
    <MenuFooter>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="account" />
        <Tabs.Screen name="store" />
        <Tabs.Screen name="order" />
        <Tabs.Screen name="rewards" />
      </Tabs>
    </MenuFooter>
  );
};

export default AppLayout;
