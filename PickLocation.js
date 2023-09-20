import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BACK_ICON from "./assets/icons/icon-back.png";
import CART_ICON from "./assets/icons/icon-cart.png";
import HISTORY_ICON from "./assets/icons/history-clock.png";
import PENCIL_ICON from "./assets/icons/pencil.png";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import DatePicker from "react-native-date-picker";
const PickLocation = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const [items, setItems] = useState([
    { id: 1, title: "2491 Purde Ave", description: "Los Angeles California" },
    { id: 2, title: "2491 Purde Ave", description: "Los Angeles California" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, text: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  const [fontsLoaded] = Font.useFonts({
    "UberMove-Medium": require("./assets/fonts/UberMove-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <StatusBar style="auto" />
        <View style={styles.row}>
          <Image source={BACK_ICON} />
          <Text>Pick up address</Text>
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItemCount}</Text>
            </View>
            <Image source={CART_ICON} />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.page}>
        <View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter Pickup Address" />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Image source={HISTORY_ICON} />
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 10,
                    }}
                  >
                    <Text style={styles.list_title}>{item.title}</Text>
                    <Text style={styles.list_desc}>{item.description}</Text>
                  </View>
                </View>
                <Image source={PENCIL_ICON} />
              </View>
            )}
            ListEmptyComponent={<Text>No search history</Text>}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.blueButton}>
              <Text style={styles.whiteText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PickLocation;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: "#FFFFFF",
  },
  top: {
    display: "flex",
    flex: 1,
  },
  page: {
    flex: 11,
    display: "flex",
    flexDirection: "column",
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
  input: {
    flex: 1,
    color: "black", // Text color for input
  },
  list_title: {
    color: "#0D1317",
    textAlign: "left",
    fontFamily: "UberMove-Bold",
    fontWeight: "900",
    fontSize: 18,
  },
  list_desc: {
    color: "#545454",
    textAlign: "left",
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    fontSize: 16,
  },
  row: {
    width: "100%",
    maxHeight: 30,
    marginTop: 20,
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
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  blueButton: {
    width: "100%",
    backgroundColor: "#4460EF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  whiteText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "UberMove-Medium",
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
