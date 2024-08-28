import { numberWithCommas } from "@/utils/numbers";
import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { COLORS } from "@/constants/colors";
import { IOptionSelectOptional } from "@/types/order";

type Props = {
  title: string;
  options: IOptionSelectOptional[];
  onSelect?: (value: IOptionSelectOptional) => void;
  value?: IOptionSelectOptional;
};
export const SelectOptions = ({ title, value, options, onSelect }: Props) => {
  const toggleSelected = (val: IOptionSelectOptional) => {
    onSelect?.(val);
  };

  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.optionsContainer}>
        {options.map((item) => {
          return (
            <Pressable key={item.id} onPress={() => toggleSelected(item)}>
              <View style={styles.itemContainer}>
                <View
                  style={[
                    styles.itemSelect,
                    item.id === value?.id && styles.itemSelected,
                  ]}
                >
                  {item.id === value?.id && (
                    <FontAwesome6 name="check" size={24} color={COLORS.white} />
                  )}
                </View>
                <Text style={styles.itemText}>{item.text}</Text>
                {!!item.cost && (
                  <Text style={styles.itemCost}>
                    {numberWithCommas(item.cost)}
                    {item.currency}
                  </Text>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "700",
    fontSize: 24,
    fontFamily: "Poppins",
  },
  optionsContainer: {
    paddingHorizontal: 4,
    paddingTop: 8,
  },
  itemContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  itemSelect: {
    borderWidth: 1,
    borderRadius: 999,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  itemSelected: {
    backgroundColor: COLORS.freshMint,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    flex: 1,
  },
  itemCost: {
    fontSize: 16,
    fontFamily: "Poppins",
    letterSpacing: 1,
  },
});
