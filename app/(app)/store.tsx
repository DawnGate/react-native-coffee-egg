import { UpcomingSoon } from "@/components/pages/upcoming/UpcomingSoon";
import { StyleSheet } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function Store() {
  return <UpcomingSoon />;
}

const styles = StyleSheet.create({
  container: {},
});
