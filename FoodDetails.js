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
import SEARCH_ICON from "./assets/icons/icon-search.png";
import HEART_ICON from "./assets/icons/icon-heart.png";
import DOTS_ICON from "./assets/icons/dot_menu_icon.png";
import STAR_ICON from "./assets/icons/star.png";
import ARROW_FORWARD_ICON from "./assets/icons/arrow-forward-fill.png";
import FOOD_DETAILS from "./assets/icons/food-details.png";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
const FoodDetails = () => {
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

  const handleIcon1Press = () => {
    // Handle the first icon's action
  };

  const handleIcon2Press = () => {
    // Handle the second icon's action
  };

  const handleIcon3Press = () => {
    // Handle the third icon's action
  };

  console.log("Food details");

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <StatusBar style="auto" />
        <View style={styles.row}>
          <Image source={BACK_ICON} />
          <Text>Dukeburger (Westside)</Text>
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
        <Image
          source={FOOD_DETAILS}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleIcon1Press} style={styles.icon}>
            <Image source={SEARCH_ICON} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleIcon2Press} style={styles.icon}>
            <Image source={HEART_ICON} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleIcon3Press} style={styles.icon}>
            <Image source={DOTS_ICON} />
          </TouchableOpacity>
        </View>
        <View style={styles.foodDetailsContainer}>
          <Text style={styles.productTitle}>Dukeburger (Westside)</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Image source={STAR_ICON} />
            <Text style={{ ...styles.productDesc, marginLeft: 5 }}>
              4.9 (101 ratings) {"\u25CF"} Burgers {"\u25CF"} $$$
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ ...styles.productDesc, fontSize: 18, color: "#545454" }}
            >
              Open untill 8:30pm
            </Text>
            <Image source={ARROW_FORWARD_ICON} style={{ marginRight: 20 }} />
          </View>
          <Text
            style={{
              ...styles.productDesc,
              fontSize: 18,
              color: "#545454",
              marginTop: 5,
            }}
          >
            Tap for more hours, info and more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

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
  image: {
    // flex: 1,
    // position: "absolute",
    top: 0,
    width: "100%",
    height: 200, // This allows the image to maintain its aspect ratio
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginRight: 10,
  },
  foodDetailsContainer: {
    width: "100%",
    marginTop: 10,
    // backgroundColor: "red",
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
    textAlign: "left",
    color: "#0D1317",
  },
  productDesc: {
    fontSize: 20,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    textAlign: "left",
    color: "#0D1317",
  },
});
