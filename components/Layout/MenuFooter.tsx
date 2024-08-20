import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Menu } from "@/components/Menu";
import { COLORS } from "@/constants/colors";

type Props = {
  children: ReactNode;
};
export const MenuFooter = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {children}
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: COLORS.frothyWhite,
  },
});
