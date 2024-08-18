import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";

import { toggleOnboarding } from "@/store/features/setting/settingSlice";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const maxStep = 3;

export default function Index() {
  const [step, setStep] = useState(1);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const dispatch = useDispatch();

  const handleSkip = () => {
    navigation.navigate("(app)");
    dispatch(toggleOnboarding());
  };

  const handleNext = () => {
    if (step === maxStep) {
      handleSkip();
      return;
    }
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
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 30,
  },
});
