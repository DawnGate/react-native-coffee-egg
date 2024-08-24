import {
  initDetail,
  closeModal,
  updateCustomize,
} from "@/store/features/order/orderSlice";
import { RootState } from "@/store/store";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/constants/colors";
import { mockItemDetails, mockModalImg } from "@/constants/mockData";
import { SelectOptions } from "./SelectOption";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { ICustomizes, IDefaultCustomizes, IItemDetail } from "@/types/order";
import { numberWithCommas } from "@/utils/numbers";

const getItemValue = (
  customizes?: ICustomizes,
  defaultCustomizes?: IDefaultCustomizes
) => {
  if (!customizes || !defaultCustomizes) {
    return {
      cost: 0,
      currency: "",
    };
  }

  const foundSize = customizes.size.options.find(
    (option) => option.id === defaultCustomizes.size
  );

  const cost = foundSize ? foundSize.cost : 0;
  const currency = foundSize?.currency;

  return {
    cost,
    currency,
  };
};

export const DetailModel = () => {
  const dispatch = useDispatch();

  const selectedMenuItem = useSelector(
    (state: RootState) => state.order.selectedMenuItem
  );
  const itemOrderDetail = useSelector(
    (state: RootState) => state.order.itemOrderDetail
  );

  const [itemDetail, setItemDetail] = useState<IItemDetail | null>(null);

  const showModal = !!itemDetail;

  const itemValue = getItemValue(
    itemDetail?.customizes,
    itemOrderDetail?.customizes
  );

  useEffect(() => {
    if (selectedMenuItem) {
      const foundItem = mockItemDetails[selectedMenuItem];
      setItemDetail(foundItem);
      dispatch(
        initDetail({
          itemId: foundItem.id,
          customizes: foundItem.defaultCustomizes,
        })
      );
    } else {
      setItemDetail(null);
    }
  }, [selectedMenuItem]);

  const handleAddMoreItem = () => {
    dispatch(
      updateCustomize({
        numberOfItem: (itemOrderDetail?.numberOfItem ?? 0) + 1,
      })
    );
  };

  const handleAddLessItem = () => {
    if (itemOrderDetail?.numberOfItem === 1) return;

    dispatch(
      updateCustomize({
        numberOfItem: (itemOrderDetail?.numberOfItem ?? 0) - 1,
      })
    );
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleAddOrder = () => {
    handleCloseModal();
  };

  return (
    <Modal
      visible={showModal}
      onRequestClose={handleCloseModal}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.backBtnContainer}>
        <Pressable style={styles.backBtn} onPress={handleCloseModal}>
          <Ionicons name="arrow-back" size={32} color={COLORS.white} />
        </Pressable>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Image
          style={styles.bannerImg}
          source={itemDetail?.imageSource || mockModalImg}
        />
        <View style={[styles.sectionContainer, styles.descriptionContainer]}>
          <Text style={styles.titleText}>{itemDetail?.title}</Text>
          <View style={styles.descriptionTextContainer}>
            {itemDetail?.description.map((item, index) => (
              <Text style={styles.descriptionText} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </View>

        {showModal &&
          itemDetail.customizes.size &&
          itemDetail.customizes.size?.options.length > 1 && (
            <View style={styles.sectionContainer}>
              <SelectOptions
                title="Chose Size:"
                options={itemDetail?.customizes.size.options}
                onSelect={(val) => {
                  dispatch(
                    updateCustomize({
                      size: val,
                    })
                  );
                }}
                value={itemOrderDetail?.customizes.size}
              />
            </View>
          )}

        {/* <View style={styles.sectionContainer}>
          <SelectOptions
            title="Them Topping"
            options={defaultSizes}
            onSelect={(val) => {
              console.log(val);
            }}
          />
        </View> */}

        {/* <View style={styles.sectionContainer}>
          <SelectOptions
            title="Them Muc da"
            options={defaultIces}
            onSelect={(val) => {
              const item = defaultIces.find((item) => item.id === val);
              dispatch(
                updateDetail({
                  detail: {
                    ice: { ...item, value: item?.id },
                  },
                })
              );
            }}
            value={itemDetail?.detail["ice"].value}
          />
        </View> */}

        <View style={styles.additionContainer} />
      </ScrollView>
      <View style={[styles.floatContainer, floatStyles.container]}>
        <View style={floatStyles.adjustContainer}>
          <Text style={floatStyles.orderCostText}>
            {numberWithCommas(
              itemValue.cost * (itemOrderDetail?.numberOfItem ?? 0)
            )}{" "}
            {itemValue.currency}
          </Text>
          <View style={floatStyles.actionContainer}>
            <Pressable onPress={handleAddLessItem}>
              <AntDesign name="minuscircleo" size={28} color="black" />
            </Pressable>
            <Text style={floatStyles.numberItemText}>
              {itemOrderDetail?.numberOfItem}
            </Text>
            <Pressable onPress={handleAddMoreItem}>
              <AntDesign name="pluscircleo" size={28} color="black" />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity onPress={handleAddOrder}>
          <View style={floatStyles.confirmContainer}>
            <Text style={floatStyles.orderText}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: COLORS.frothyWhite,
  },
  backBtnContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
  },
  backBtn: {
    paddingLeft: 10,
    paddingVertical: 4,
  },
  bannerImg: {
    height: 400,
    width: "100%",
  },
  sectionContainer: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    marginVertical: 8,
  },
  descriptionContainer: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: 0,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 32 * 1.2,
    fontFamily: "Poppins",
  },
  descriptionTextContainer: {
    marginTop: 10,
    gap: 6,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 16 * 1.3,
    fontFamily: "Poppins",
    color: COLORS.espresso,
  },
  floatContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.latte,
    paddingTop: 8,
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.white,
    width: "100%",
  },
  additionContainer: {
    height: 150,
  },
});

const floatStyles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 8 },
  adjustContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  orderCostText: {
    flex: 1,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Poppins",
    letterSpacing: 1,
    color: COLORS.espresso,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  numberItemText: {
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: 20,
  },
  confirmContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.espresso,
  },
  orderText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 18,
    color: COLORS.white,
  },
});
