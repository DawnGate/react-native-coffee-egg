import { ScrollView, StyleSheet, View } from "react-native";

import { COLORS } from "@/constants/colors";

import { UserGreeting } from "@/components/pages/home/UserGreeting";
import { SpecialOffer } from "@/components/pages/home/SpecialOffer";
import { MenuList } from "@/components/pages/home/MenuList";

export { ErrorBoundary } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <UserGreeting />
        <SpecialOffer />
        <MenuList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.frothyWhite,
    flex: 1,
  },
});
