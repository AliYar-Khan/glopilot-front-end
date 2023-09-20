import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ORDERS_ICON from "./assets/icons/icon-receipt.png";
import HEART_ICON from "./assets/icons/icon-heart.png";
import HELP_ICON from "./assets/icons/icon-question.png";
import PROMOTION_ICON from "./assets/icons/icon-price-tag.png";
import INVITE_ICON from "./assets/icons/icon-gift.png";
import SearchHome from "./SearchHomeFood";
import SearchHome2 from "./SearchHomeFood2";
import Schedule from "./Schedule";
import PickLocation from "./PickLocation";
import FoodDetails from "./FoodDetails";
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
const LeftDrawerContent = ({ navigation }) => (
  <View style={stylesDrawer.drawerContainer}>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("SearchFood")}
    >
      <Image source={ORDERS_ICON} />
      <Text style={stylesDrawer.drawerText}>Orders</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("SearchFood2")}
    >
      <Image source={HEART_ICON} />
      <Text style={stylesDrawer.drawerText}>Favourites</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Schedule")}
    >
      <Image source={HELP_ICON} />
      <Text style={stylesDrawer.drawerText}>Help</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("SearchFood")}
    >
      <Image source={PROMOTION_ICON} />
      <Text style={stylesDrawer.drawerText}>Promotions</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("SearchFood2")}
    >
      <Image source={INVITE_ICON} style={{ marginBottom: 15 }} />
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={stylesDrawer.drawerText}>Invite Friends</Text>
        <Text
          style={{
            ...stylesDrawer.drawerText,
            color: "#B9B9B9FF",
            fontSize: 15,
          }}
        >
          You'll get 15% off
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FoodDetails"
      drawerType="slide"
      drawerStyle={stylesDrawer.drawer}
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      drawerContent={(props) => <LeftDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SearchFood" component={SearchHome} />
      <Drawer.Screen name="SearchFood2" component={SearchHome2} />
      <Drawer.Screen name="Schedule" component={Schedule} />
      <Drawer.Screen name="PickLocation" component={PickLocation} />
      <Drawer.Screen name="FoodDetails" component={FoodDetails} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;

const stylesDrawer = StyleSheet.create({
  drawer: {
    width: "50%", // Adjust the width as needed
  },
  drawerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 80,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerText: {
    fontSize: 15,
    marginLeft: 10,
  },
});
