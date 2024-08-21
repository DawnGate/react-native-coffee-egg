import { Category } from "@/components/pages/order/Category";
import { FloatCart } from "@/components/pages/order/FloatCart";
import { OrderMenus } from "@/components/pages/order/OrderMenus";
import { COLORS } from "@/constants/colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function Order() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Place your order</Text>
          <Text style={styles.subHeaderText}>
            Our baristas are ready to brew up your perfect cup!
          </Text>
        </View>
        <Category />
        <OrderMenus />
      </ScrollView>
      <FloatCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.frothyWhite,
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 20,
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginTop: 4,
  },
});
