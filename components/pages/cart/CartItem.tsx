import { COLORS } from "@/constants/colors";
import { mockDrinkImg, mockItemDetails } from "@/constants/mockData";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import {
  decreaseCartItem,
  increaseCartItem,
  ItemDetail,
} from "@/store/features/order/orderSlice";
import { numberWithCommas } from "@/utils/numbers";
import { useDispatch } from "react-redux";

type Props = {
  data: ItemDetail & { id: string };
};
export const CartItem = ({ data }: Props) => {
  const dispatch = useDispatch();

  const handleAddLessItem = () => {
    dispatch(decreaseCartItem(data.id));
  };

  const handleAddMoreItem = () => {
    dispatch(increaseCartItem(data.id));
  };

  const itemDetail = mockItemDetails[data.itemId];

  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.imageContainer}>
        <Image style={itemStyles.image} source={itemDetail.imageSource} />
      </View>
      <View style={itemStyles.contentContainer}>
        <ScrollView style={itemStyles.descriptionContainer}>
          <Text style={itemStyles.titleText}>{itemDetail.title}</Text>
          <Text style={itemStyles.sizeText}>
            Size: {data.customizes.size.text}
          </Text>
          {/* <Text>Other option</Text> */}
        </ScrollView>
        <View style={itemStyles.contentFooterContainer}>
          <Text style={itemStyles.priceText}>
            {numberWithCommas(data.customizes.size.cost * data.numberOfItem)}
          </Text>
          <View style={itemStyles.actionContainer}>
            <Pressable onPress={handleAddLessItem}>
              <AntDesign name="minuscircleo" size={28} color="black" />
            </Pressable>
            <Text style={itemStyles.numberItemText}>{data.numberOfItem}</Text>
            <Pressable onPress={handleAddMoreItem}>
              <AntDesign name="pluscircleo" size={28} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: 120,
    backgroundColor: COLORS.espresso,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    objectFit: "contain",
  },
  contentContainer: {
    padding: 8,
    flex: 1,
  },
  descriptionContainer: {
    flex: 1,
  },
  contentFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 18,
  },
  sizeText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    color: COLORS.latte,
  },
  priceText: {
    fontFamily: "Poppins",
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "700",
    color: COLORS.espresso,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  numberItemText: {
    fontSize: 20,
    lineHeight: 20 * 1.2,
  },
});
