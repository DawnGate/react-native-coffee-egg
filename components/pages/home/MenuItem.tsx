import { COLORS } from "@/constants/colors";
import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type MenuItem = {
  title: string;
  icon: any;
  id: number | string;
};

type Props = {
  items: MenuItem[];
  title: string;
};

export const MenuItem = ({ title, items }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={textStyles.header}>{title}</Text>
        <Link href="/">
          <Text style={textStyles.seeAll}>See all</Text>
        </Link>
      </View>
      <FlatList
        scrollEnabled={false}
        data={items}
        renderItem={({ item }) => (
          <View style={itemStyle.container}>
            <View style={itemStyle.iconContainer}>
              <Image source={item.icon} />
            </View>
            <View>
              <Text style={itemStyle.text}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ gap: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={3}
        style={styles.itemsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  itemsContainer: {
    paddingHorizontal: 15,
    gap: 16,
    marginTop: 10,
  },
});

const textStyles = StyleSheet.create({
  header: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
  },
  seeAll: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.freshMint,
  },
});

const itemStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 10,
    flex: 1,
    maxWidth: "30%",
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.black,
    textAlign: "center",
  },
  iconContainer: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});
