import { Button } from "@/components/Button";
import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export const SpecialOffer = () => {
  const router = useRouter();

  const navigateRegister = () => {
    router.push("/(aux)/register");
  };

  const navigateLogin = () => {
    router.push("/(aux)/login");
  };

  const navigateOrder = () => {
    // router.push("/(app)/order");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>
          Join the Rewards program to enjoy free beverages, special offers and
          more!
        </Text>
        <View style={styles.ctaContainer}>
          <Button title="JOIN NOW" onPress={navigateRegister} />
          <Button
            title="GUEST ORDER"
            override={{
              containerStyle: {
                backgroundColor: COLORS.latte,
              },
              titleStyle: {
                color: COLORS.espresso,
              },
            }}
            onPress={navigateOrder}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={[
            styles.headerText,
            {
              color: COLORS.black,
            },
          ]}
        >
          Already have an account?
        </Text>
        <View style={styles.containerLogin}>
          <Button
            title="LOGIN"
            override={{
              containerStyle: {
                backgroundColor: COLORS.white,
                minHeight: 60,
                borderColor: COLORS.freshMint,
                borderWidth: 3,
              },
              titleStyle: {
                color: COLORS.freshMint,
              },
            }}
            onPress={navigateLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  topContainer: {
    backgroundColor: COLORS.freshMint,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
    paddingBottom: 28,
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 18,
    textAlign: "center",
    color: COLORS.white,
  },
  contentContainer: {
    padding: 20,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: COLORS.white,
  },
  ctaContainer: {
    paddingTop: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  containerLogin: {
    paddingTop: 12,
    paddingHorizontal: 10,
  },
});
