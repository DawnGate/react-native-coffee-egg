import { StyleSheet, Text, View } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Register screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 30,
  },
});
