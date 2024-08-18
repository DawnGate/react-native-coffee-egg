import { RootState } from "@/store/store";
import { Href, Redirect } from "expo-router";
import { useSelector } from "react-redux";

const Index = () => {
  const showOnboarding = useSelector(
    (state: RootState) => state.setting.showOnboarding
  );

  let redirectUrl: Href = "/(app)/";
  if (showOnboarding) {
    redirectUrl = "/(aux)/onboarding";
  }

  return <Redirect href={redirectUrl} />;
};
export default Index;
