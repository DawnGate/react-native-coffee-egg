import { COLORS } from "@/constants/colors";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Sizes = "small" | "normal";

type Props = {
  title: string;
  size?: Sizes;
  override?: {
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
  };
} & PressableProps;

export const Button = ({
  title,
  size = "normal",
  override,
  ...rest
}: Props) => {
  return (
    <Pressable
      style={[
        containerStyle.base,
        containerStyle[size],
        override?.containerStyle,
      ]}
      {...rest}
    >
      <Text style={[titleStyle.base, titleStyle[size], override?.titleStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const containerStyle = StyleSheet.create({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.espresso,
  },
  normal: {
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  small: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});

const titleStyle = StyleSheet.create({
  base: { fontFamily: "Poppins", fontWeight: "500", color: COLORS.frothyWhite },
  normal: { fontSize: 14, lineHeight: 20 },
  small: { fontSize: 12, lineHeight: undefined },
});
