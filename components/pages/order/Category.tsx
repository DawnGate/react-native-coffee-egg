import { COLORS } from "@/constants/colors";
import { mockCategories } from "@/constants/mockData";
import { Image, StyleSheet, Text, View } from "react-native";

export const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Category</Text>
      </View>
      <View style={styles.categoriesContainer}>
        {mockCategories.map((item) => (
          <View key={item.id} style={itemStyles.container}>
            <View style={itemStyles.imageContainer}>
              <Image style={itemStyles.image} source={item.imageSource} />
            </View>
            <View style={itemStyles.textContainer}>
              <Text style={itemStyles.text}>{item.name}</Text>
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
    justifyContent: "center",
  },
});

const itemStyles = StyleSheet.create({
  container: {
    width: "20%",
    alignItems: "center",
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: COLORS.latte,
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
    marginTop: 12,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 14,
  },
});
