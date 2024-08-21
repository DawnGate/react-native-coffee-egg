import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { COLORS } from "@/constants/colors";

export const FloatCart = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Feather name="shopping-bag" color={COLORS.white} size={24} />
        <Text style={styles.text}>0d</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.latte,
    position: "absolute",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    bottom: 20,
    right: 20,
    borderRadius: 8,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
});
