import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  const handleSkip = () => {
    if (step === 1) {
      navigation.navigate("(aux)", {
        screen: "register",
      });
    } else {
      navigation.navigate("(app)" as never);
    }
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Onboarding</Text>
      <Text>{step}</Text>
      <Button onPress={handleSkip} title="skip" />
      <Button onPress={handleNext} title="next" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 30,
  },
});
