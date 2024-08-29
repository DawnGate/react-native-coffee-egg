import { COLORS } from "@/constants/colors";
import { mockCategories } from "@/constants/mockData";
import { ICategory } from "@/types/order";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const HomeBanner = ({ data }: { data: ICategory }) => {
  const handlePress = () => {
    router.push("/(app)/order");
  };

  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.dataContainer}>
        <View>
          <Text style={itemStyles.titleText}>{data.name}</Text>
          <Text style={itemStyles.descriptionText}>{data.description}</Text>
        </View>

        <Pressable onPress={handlePress} style={itemStyles.btnContainer}>
          <Text style={itemStyles.btnText}>Find out more</Text>
        </Pressable>
      </View>

      <View style={itemStyles.bannerContainer}>
        {data.bannerSource && (
          <Image style={itemStyles.bannerImage} source={data.bannerSource} />
        )}
      </View>
    </View>
  );
};

export const HomeBanners = () => {
  return (
    <View style={styles.container}>
      {mockCategories.map((cat) => (
        <HomeBanner data={cat} key={cat.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 4,
    paddingHorizontal: 20,
    marginBottom: 80,
  },
});

const itemStyles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dataContainer: {
    padding: 16,
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    color: COLORS.white,
    fontSize: 20,
    textTransform: "uppercase",
  },
  descriptionText: {
    marginTop: 8,
    fontFamily: "Poppins",
    color: COLORS.white,
    maxWidth: "70%",
    fontSize: 14,
  },
  btnContainer: {
    backgroundColor: COLORS.white,
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 48,
  },
  btnText: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: COLORS.black,
  },
  bannerContainer: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.latte,
    zIndex: -1,
  },
  bannerImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
