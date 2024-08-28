import { StyleSheet, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "@/constants/colors";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { numberWithCommas } from "@/utils/numbers";
import { router } from "expo-router";

export const FloatCart = () => {
  const cart = useSelector((state: RootState) => state.order.cart);

  const totalItems = cart.length;

  const totalValue = cart.reduce((cur, item) => {
    return cur + item.customizes.size.cost * item.numberOfItem;
  }, 0);

  const currency = cart[0]?.customizes.size.currency ?? "";

  const navigateToCart = () => {
    router.push("/(app)/cart");
  };

  return (
    <TouchableOpacity onPress={navigateToCart}>
      <View style={styles.container}>
        <View style={styles.shoppingBagContainer}>
          <Feather name="shopping-bag" color={COLORS.white} size={24} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        </View>
        {!!totalItems && (
          <Text style={styles.text}>
            {numberWithCommas(totalValue)} {currency}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.latte,
    position: "absolute",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    bottom: 20,
    right: 20,
    borderRadius: 8,
    zIndex: 100,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
  shoppingBagContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: COLORS.freshMint,
    borderRadius: 99,
    right: -4,
    top: -4,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: COLORS.white,
  },
});
