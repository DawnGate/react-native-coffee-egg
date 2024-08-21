import { COLORS } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export const UpcomingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.caramel,
  },
  text: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: "700",
  },
});
