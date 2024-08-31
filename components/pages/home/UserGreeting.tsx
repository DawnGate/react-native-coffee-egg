import { StyleSheet, View, Text } from "react-native";

export const UserGreeting = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Good Morning!</Text>
        <Text style={styles.subTitleText}>Login and get a cup of ☕️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleText: {
    fontFamily: "Sevillana",
    fontSize: 20,
    lineHeight: 30,
  },
  subTitleText: {
    fontFamily: "Poppins",
    fontSize: 20,
  },
});
