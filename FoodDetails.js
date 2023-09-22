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
  ScrollView,
} from "react-native";
import BACK_ICON from "./assets/icons/icon-back.png";
import CART_ICON from "./assets/icons/icon-cart.png";
import SEARCH_ICON from "./assets/icons/icon-search.png";
import HEART_ICON from "./assets/icons/icon-heart.png";
import DOTS_ICON from "./assets/icons/dot_menu_icon.png";
import STAR_ICON from "./assets/icons/star.png";
import ARROW_FORWARD_ICON from "./assets/icons/arrow-forward-fill.png";
import FOOD_DETAILS from "./assets/icons/food-details.png";
import GROUP_ICON from "./assets/icons/group-icon.png";
import ADD_ICON from "./assets/icons/add-icon.png";
import CALENDAR_ICON from "./assets/icons/calendar-icon.png";
import CHICKEN_DONER from "./assets/icons/chicken-doner.png";
import SUSHI_ROLL from "./assets/icons/fresh-plated-sushi-roll.png";
import SPICY_GROZA from "./assets/icons/spicy-groza.png";
import SURF_CITY_WINGS from "./assets/icons/spicy-groza.png";
import GARLIC_GREEN_BEAN from "./assets/icons/garlic-green-bean.png";
import ANGEL_PASTA from "./assets/icons/angel-pasta.png";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
const FoodDetails = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [deliveryTabActive, setDeliveryTabActive] = useState(true);

  const pickedForYouProducts = [
    {
      id: "1",
      title: "Chicken Teriyaki Bowl",
      price: "$19.99",
      description:
        "Grilled marinated skinless and bone-less chicken filet topped with home...",
      imageUri: CHICKEN_DONER,
    },
    {
      id: "2",
      title: "Shrimp Tempura Roll",
      price: "$29.99",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      imageUri: SUSHI_ROLL,
    },
    // Add more product items here
  ];

  const AppetizersProducts = [
    {
      id: "1",
      title: "Spicy Gyoza",
      price: "$12.00",
      imageUri: SPICY_GROZA,
    },
    {
      id: "2",
      title: "Garlic Green Bean",
      price: "$9.00",
      imageUri: GARLIC_GREEN_BEAN,
    },
    {
      id: "3",
      title: "Angel Pasta",
      price: "$9.00",
      imageUri: ANGEL_PASTA,
    },
    {
      id: "4",
      title: "Surf City Wings",
      price: "$9.00",
      imageUri: SURF_CITY_WINGS,
    },
    // Add more product items here
  ];

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

  const ProductItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imageUri} style={styles.productsListImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.productsListTitle}>{item.title}</Text>
          <Text style={styles.productsListPrice}>{item.price}</Text>
          <Text style={styles.productsListDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  console.log("Food details");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
        onLayout={onLayoutRootView}
      >
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
        <View>
          <Image
            source={FOOD_DETAILS}
            style={styles.image}
            resizeMode="cover"
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
                alignItems: "center",
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
                style={{
                  ...styles.productDesc,
                  fontSize: 18,
                  color: "#545454",
                }}
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
          <View
            style={{
              ...styles.row,
              display: "flex",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDeliveryTabActive(true);
              }}
              style={{
                ...styles.tab,
                backgroundColor: deliveryTabActive ? "#4460EF" : "#EEEEEE",
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <Text
                style={{
                  ...styles.tabText,
                  color: deliveryTabActive ? "#FFFFFF" : "#0D1317",
                }}
              >
                Delivery
              </Text>
              <Text
                style={{
                  ...styles.tabText,
                  color: deliveryTabActive ? "#FFFFFF" : "#0D1317",
                }}
              >
                30 - 45 min {"\u25CF"} $0.49
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDeliveryTabActive(false);
              }}
              style={{
                ...styles.tab,
                backgroundColor: !deliveryTabActive ? "#4460EF" : "#EEEEEE",
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Text
                style={{
                  ...styles.tabText,
                  color: !deliveryTabActive ? "#FFFFFF" : "#0D1317",
                }}
              >
                Pickup
              </Text>
              <Text
                style={{
                  ...styles.tabText,
                  color: !deliveryTabActive ? "#FFFFFF" : "#0D1317",
                }}
              >
                30 - 45 min {"\u25CF"} 0.31mi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.row,
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                ...styles.orderOption,
                marginLeft: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={GROUP_ICON} />
              <Text style={styles.orderOptionText}>Group Order</Text>
            </View>
            <View
              style={{
                ...styles.orderOption,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={CALENDAR_ICON} />
              <Text style={styles.orderOptionText}>Schedule</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Picked For You</Text>
          </View>
          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 10,
              justifyContent: "space-evenly",
            }}
          >
            <View style={styles.pick4uColumn}>
              <Image
                source={CHICKEN_DONER}
                style={{ width: 160, height: 110, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text style={styles.pick4uTitle}>310 Roll</Text>
              <Text style={styles.pick4uPrice}>$14.00</Text>
              <Image source={ADD_ICON} style={styles.addToCartIcon} />
            </View>
            <View style={{ ...styles.pick4uColumn, marginLeft: 10 }}>
              <Image
                source={SUSHI_ROLL}
                style={{ width: 160, height: 110, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text style={styles.pick4uTitle}>Lemon Roll</Text>
              <Text style={styles.pick4uPrice}>$17.00</Text>
              <Image
                source={ADD_ICON}
                style={{ ...styles.addToCartIcon, right: 5 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            {pickedForYouProducts.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </View>
          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Appetizers</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {AppetizersProducts.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: "50%", // Each item takes up 50% of the container's width
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={item.imageUri}
                    style={{ width: 160, height: 110, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={styles.pick4uTitle}>{item.title}</Text>
                  <Text style={styles.pick4uPrice}>{item.price}</Text>
                  <Image
                    source={ADD_ICON}
                    style={{ ...styles.addToCartIcon, top: 15, right: 15 }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
  },
  top: {
    display: "flex",
  },
  row: {
    width: "100%",
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
  tab: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    height: 50,
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
  },
  orderOption: {
    width: 140,
    height: 40,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
  },
  orderOptionText: {
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    color: "#0D1317",
    textAlign: "left",
    marginLeft: 5,
  },
  pickedHeading: {
    fontSize: 24,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
  },
  pick4uColumn: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
  },
  addToCartIcon: {
    position: "absolute",
    backgroundColor: "#4460EF",
    width: 36,
    height: 36,
    borderRadius: 18,
    top: 5,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pick4uTitle: {
    fontFamily: "UberMove-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  pick4uPrice: {
    fontFamily: "UberMove-Medium",
    fontSize: 16,
    fontWeight: "600",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  productsListImage: {
    width: 104,
    height: 104,
    borderRadius: 10,
    // marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  productsListTitle: {
    fontSize: 20,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
    marginBottom: 4,
    color: "#0D1317",
  },
  productsListPrice: {
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    color: "#0D1317",
    marginBottom: 4,
  },
  productsListDescription: {
    fontFamily: "UberMove-Medium",
    fontSize: 16,
    fontWeight: "600",
    color: "#545454",
  },
});
