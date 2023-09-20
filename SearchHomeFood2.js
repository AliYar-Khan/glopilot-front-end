import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import BACK_ICON from "./assets/icons/icon-back.png";
import CART_ICON from "./assets/icons/icon-cart.png";
import SEARCH_ICON from "./assets/icons/icon-search.png";
import CLOCK_ICON from "./assets/icons/icon-clock.png";
import { TextInput } from "react-native";

export default function SearchFoodHome2() {
  const SEARCHES = ["Meat", "Vine", "Vegetables"];

  const Item = ({ item }) => (
    <View style={styles.itemList}>
      <Image source={CLOCK_ICON} style={styles.searchIcon} />
      <Text style={styles.textList}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <Image source={BACK_ICON} />
        <Text>Search</Text>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItemCount}</Text>
          </View>
          <Image source={CART_ICON} />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <Image source={SEARCH_ICON} style={styles.searchIcon} />
        <TextInput placeholder="Search" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: 15,
          marginTop: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Recent Searches
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={SEARCHES}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index}
          style={styles.listContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    display: "flex",
    backgroundColor: "#fff",
  },
  row: {
    width: "100%",
    maxHeight: 30,
    marginTop: 30,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: "gray",
    height: 1,
    marginTop: 10,
    width: "100%",
  },
  inputContainer: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEEFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "black", // Text color for input
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
    height: "auto",
    marginTop: 10,
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEEFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  textList: {
    fontSize: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#4460EF",
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    top: -10,
    left: 10,
    zIndex: 1000,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
