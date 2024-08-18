import { StyleSheet, Text } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function Account() {
  return <Text style={styles.text}>Account screen.</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 30,
  },
});
