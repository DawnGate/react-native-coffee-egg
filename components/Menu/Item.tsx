import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Href, Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  icon: string;
  pathname: string;
  title: string;
  isActive: boolean;
};
export const MenuItem = ({ icon, title, pathname, isActive }: Props) => {
  return (
    <Link href={pathname as Href<string>}>
      <View style={[styles.container]}>
        <View>
          <FontAwesome6
            name={icon as any}
            size={24}
            color={isActive ? colors.active : colors.normal}
          />
        </View>
        <Text
          style={[
            styles.title,
            {
              color: isActive ? colors.active : colors.normal,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 12,
  },
  container: {
    alignItems: "center",
    gap: 4,
  },
});

const colors = {
  normal: "#999",
  active: "#007AFF",
};
