import { CartItem } from "@/components/pages/cart/CartItem";
import { COLORS } from "@/constants/colors";
import { resetCart } from "@/store/features/order/orderSlice";
import { RootState } from "@/store/store";
import { numberWithCommas } from "@/utils/numbers";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

export { ErrorBoundary } from "expo-router";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.order.cart);

  const isEmptyCart = cart.length === 0;

  const total = cart.reduce(
    (cur, item) => cur + item.customizes.size.cost * item.numberOfItem,
    0
  );

  const confirmOrder = () => {
    dispatch(resetCart());
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Cart</Text>
          <Text style={styles.subHeaderText}>
            Review the items you've selected before checking out
          </Text>
        </View>
        <View style={styles.itemsContainer}>
          {cart.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </View>
        {isEmptyCart && (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty!!!</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerDetailContainer}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textTotalNumber}>{numberWithCommas(total)}</Text>
        </View>
        <TouchableOpacity
          disabled={isEmptyCart}
          onPress={confirmOrder}
          style={styles.footerBtn}
        >
          <Text style={styles.footerBtnText}>Pickup your order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.frothyWhite,
    flex: 1,
  },
  headerContainer: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginTop: 4,
    textAlign: "center",
  },
  itemsContainer: {
    paddingHorizontal: 12,
    rowGap: 12,
  },
  emptyCart: {
    marginTop: 40,
  },
  emptyCartText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 20,
    color: COLORS.freshMint,
    textAlign: "center",
  },
  scrollViewContainer: {
    paddingBottom: 80,
  },
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  footerDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  footerBtn: {
    backgroundColor: COLORS.freshMint,
    borderRadius: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footerBtnText: {
    fontFamily: "Poppins",
    fontSize: 24,
    textAlign: "center",
    color: COLORS.white,
  },
  textTotal: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 16,
  },
  textTotalNumber: {
    fontFamily: "Poppins",
    letterSpacing: 1,
    fontWeight: "700",
    fontSize: 20,
  },
});
