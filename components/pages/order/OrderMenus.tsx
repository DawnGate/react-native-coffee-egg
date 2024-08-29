import { COLORS } from "@/constants/colors";
import { mockCategories, mockMenuItems } from "@/constants/mockData";
import { openModal } from "@/store/features/order/orderSlice";
import { ICategory } from "@/types/order";
import { numberWithCommas } from "@/utils/numbers";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

export const OrderMenus = () => {
  return (
    <View style={{ marginBottom: 80 }}>
      {mockCategories.map((item) => (
        <OrderMenu key={item.id} category={item} />
      ))}
    </View>
  );
};

type OrderMenuProps = {
  category: ICategory;
};
const OrderMenu = ({ category }: OrderMenuProps) => {
  const dispatch = useDispatch();

  const items = mockMenuItems[category.id] ?? [];

  const toggleModalDetail = (itemId: string) => {
    dispatch(openModal(itemId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{category.name}</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <RectButton
            key={item.id}
            onPress={() => {
              toggleModalDetail(item.id);
            }}
          >
            <View style={itemStyles.container}>
              <View style={itemStyles.imageContainer}>
                <Image style={itemStyles.image} source={item.imageSource} />
              </View>
              <View style={itemStyles.textContainer}>
                <Text style={itemStyles.titleText}>{item.name}</Text>
                <Text style={itemStyles.currencyText}>
                  {numberWithCommas(item.cost)} {item.currency}
                </Text>
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
    overflow: "hidden",
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
    letterSpacing: 1,
    marginTop: 4,
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
