import { Pressable, StyleSheet, Text, View } from "react-native";

const HomeBanner = () => {
  return (
    <View style={itemStyles.container}>
      <View>
        <Text style={itemStyles.titleText}>DRINKS</Text>
        <Text style={itemStyles.descriptionText}>
          Astro Bunny in Cosmos Collection
        </Text>
      </View>

      <Pressable onPress={() => {}} style={itemStyles.btnContainer}>
        <Text style={itemStyles.btnText}>Find out more</Text>
      </Pressable>
    </View>
  );
};

export const HomeBanners = () => {
  return (
    <View style={styles.container}>
      <HomeBanner />
      <HomeBanner />
      <HomeBanner />
      <HomeBanner />
      <HomeBanner />
      <HomeBanner />
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
    backgroundColor: "#fb7185",
    padding: 16,
  },
  titleText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "#fff",
    fontSize: 20,
  },
  descriptionText: {
    marginTop: 8,
    fontFamily: "Poppins",
    color: "#fff",
    maxWidth: "70%",
    fontSize: 14,
  },
  btnContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 48,
  },
  btnText: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
  },
});
