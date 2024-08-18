import { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Menu } from "@/components/Menu";

type Props = {
  children: ReactNode;
};
export const MenuFooter = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>{children}</ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    paddingTop: 30,
  },
});
