import {
  initDetail,
  toggleModal,
  updateDetail,
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
import { mockModalImg } from "@/constants/mockData";
import { SelectOptions } from "./SelectOption";
import { defaultIces, defaultSizes } from "@/constants/order";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect } from "react";

export const DetailModel = () => {
  const dispatch = useDispatch();

  const showModal = useSelector((state: RootState) => state.order.showModal);
  const itemDetail = useSelector((state: RootState) => state.order.itemDetail);

  const handleAddMoreItem = () => {
    dispatch(
      updateDetail({
        numberOfItem: (itemDetail?.numberOfItem ?? 0) + 1,
      })
    );
  };

  const handleAddLessItem = () => {
    if (itemDetail?.numberOfItem === 1) return;

    dispatch(
      updateDetail({
        numberOfItem: (itemDetail?.numberOfItem ?? 0) - 1,
      })
    );
  };

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const handleAddOrder = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (showModal) {
      dispatch(
        initDetail({
          size: {
            value: "L",
            cost: 10000,
          },
          ice: {
            value: "N",
          },
        })
      );
    }
  }, [showModal]);

  return (
    <Modal
      visible={showModal}
      onRequestClose={handleToggleModal}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.backBtnContainer}>
        <Pressable style={styles.backBtn} onPress={handleToggleModal}>
          <Ionicons name="arrow-back" size={32} color={COLORS.white} />
        </Pressable>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Image style={styles.bannerImg} source={mockModalImg} />
        <View style={[styles.sectionContainer, styles.descriptionContainer]}>
          <Text style={styles.titleText}>Espresso Sua Da (L)</Text>
          <Text style={styles.descriptionText}>
            Espresso là một loại cà phê được bắt nguồn từ nước Ý vào khoảng năm
            1930. Sau đó lan rộng sang Tây Ban Nha, phổ biến tại Anh những năm
            1950, rồi dần sang các nước châu Âu và ngày nay thì Espresso đã có
            mặt khắp nơi trên thế giới. Trong tiếng Ý, “Espresso” có nghĩa là
            “tức thì, nhanh chóng”. Vậy nên, quá trình tạo ra Espresso và cả
            việc thưởng thức chúng cũng rất nhanh gọn. Thậm chí ở Ý, người ta
            gọi tách Espresso và uống ngay tại chỗ chỉ với vài hơi. Các số liệu
            cho biết đến 80% lượng Espresso của thế giới đang được tiêu thụ tại
            Ý.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <SelectOptions
            title="Chon size"
            options={defaultSizes}
            onSelect={(val) => {
              const item = defaultSizes.find((item) => item.id === val);
              dispatch(
                updateDetail({
                  detail: {
                    size: { ...item, value: item?.id },
                  },
                })
              );
            }}
            value={itemDetail?.detail["size"].value}
          />
        </View>

        {/* <View style={styles.sectionContainer}>
          <SelectOptions
            title="Them Topping"
            options={defaultSizes}
            onSelect={(val) => {
              console.log(val);
            }}
          />
        </View> */}

        <View style={styles.sectionContainer}>
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
        </View>

        <View style={styles.additionContainer} />
      </ScrollView>
      <View style={[styles.floatContainer, floatStyles.container]}>
        <View style={floatStyles.adjustContainer}>
          <Text style={floatStyles.orderCostText}>47,000$</Text>
          <View style={floatStyles.actionContainer}>
            <Pressable onPress={handleAddLessItem}>
              <AntDesign name="minuscircleo" size={28} color="black" />
            </Pressable>
            <Text style={floatStyles.numberItemText}>
              {itemDetail?.numberOfItem}
            </Text>
            <Pressable onPress={handleAddMoreItem}>
              <AntDesign name="pluscircleo" size={28} color="black" />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity onPress={handleAddOrder}>
          <View style={floatStyles.confirmContainer}>
            <Text style={floatStyles.orderText}>Add to you order</Text>
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
  descriptionText: {
    marginTop: 10,
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
