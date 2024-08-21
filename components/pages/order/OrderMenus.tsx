import { COLORS } from "@/constants/colors";
import { mockDrinkImg } from "@/constants/mockData";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export const OrderMenus = () => {
  const categories = Array(10)
    .fill(0)
    .map((_, index) => index);

  return (
    <GestureHandlerRootView>
      <View style={{ marginBottom: 80 }}>
        {categories.map((item) => (
          <OrderMenu key={item} />
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

const OrderMenu = () => {
  const items = Array(8)
    .fill(0)
    .map((_, index) => index);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Drink</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <RectButton key={item} onPress={() => alert("Pressed!")}>
            <View style={itemStyles.container}>
              <View style={itemStyles.imageContainer}>
                <Image style={itemStyles.image} source={mockDrinkImg} />
              </View>
              <View style={itemStyles.textContainer}>
                <Text style={itemStyles.titleText}>Hot Coffee</Text>
                <Text style={itemStyles.currencyText}>50.000 đ</Text>
              </View>
              <View style={itemStyles.btnContainer}>
                <View style={itemStyles.btn}>
                  <FontAwesome6 name="plus" size={24} color={COLORS.white} />
                </View>
              </View>
            </View>
          </RectButton>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 18,
  },
  itemsContainer: {
    gap: 16,
  },
});

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 8,
    margin: "auto",
    backgroundColor: COLORS.espresso,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  titleText: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.black,
  },
  currencyText: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
  btnContainer: {
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  btn: {
    backgroundColor: COLORS.freshMint,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    color: COLORS.white,
  },
});
