import { COLORS } from "@/constants/colors";
import { mockDrinkImg } from "@/constants/mockData";
import { Image, StyleSheet, Text, View } from "react-native";

export const Category = () => {
  const categories = Array(10)
    .fill(0)
    .map((_, index) => index);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Category</Text>
      </View>
      <View style={styles.categoriesContainer}>
        {categories.map((item) => (
          <View key={item} style={itemStyles.container}>
            <View style={itemStyles.imageContainer}>
              <Image style={itemStyles.image} source={mockDrinkImg} />
            </View>
            <View style={itemStyles.textContainer}>
              <Text style={itemStyles.text}>Hot Coffee</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 18,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    rowGap: 16,
  },
});

const itemStyles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 999,
    margin: "auto",
    backgroundColor: COLORS.espresso,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 14,
  },
});
