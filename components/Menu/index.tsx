import { StyleSheet, View } from "react-native";
import { usePathname } from "expo-router";

import { MenuItem } from "./Item";

const menuItems = [
  {
    icon: "house",
    title: "Home",
    pathname: "/",
  },
  {
    icon: "bag-shopping",
    title: "Order",
    pathname: "/order",
  },
  {
    icon: "store",
    title: "Store",
    pathname: "/store",
  },
  {
    icon: "ticket",
    title: "Rewards",
    pathname: "/rewards",
  },
  {
    icon: "user",
    title: "Account",
    pathname: "/account",
  },
];

export const Menu = () => {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {menuItems.map((item) => {
        const isActive = item.pathname === pathname;
        return (
          <MenuItem
            key={item.pathname}
            isActive={isActive}
            icon={item.icon}
            title={item.title}
            pathname={item.pathname}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderTopWidth: 0.5,
    borderColor: "rgba(0,0,0, 0.3)",
  },
});
