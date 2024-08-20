import { ScrollView, StyleSheet, View } from "react-native";

import { COLORS } from "@/constants/colors";

import { UserGreeting } from "@/components/pages/home/UserGreeting";
import { SpecialOffer } from "@/components/pages/home/SpecialOffer";
import { HomeBanners } from "@/components/pages/home/HomeBanners";

export { ErrorBoundary } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <UserGreeting />
        <SpecialOffer />
        <HomeBanners />
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
