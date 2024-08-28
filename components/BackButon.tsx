import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  handleBack?: () => {};
};
export const BackButton = ({ handleBack }: Props) => {
  const onBack = () => {
    if (handleBack) {
      handleBack();
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.backBtnContainer}>
      <RectButton style={styles.backBtn} onPress={onBack}>
        <Ionicons name="arrow-back" size={32} color={COLORS.white} />
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtnContainer: {},
  backBtn: {},
});
