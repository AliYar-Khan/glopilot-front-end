import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ORDERS_ICON from "./assets/icon-receipt.png";
import HEART_ICON from "./assets/icon-heart.png";
import HELP_ICON from "./assets/icon-question.png";
import PROMOTION_ICON from "./assets/icon-price-tag.png";
import INVITE_ICON from "./assets/icon-gift.png";
import Screen160 from "./screen_160";
import Screen92 from "./screen_92";
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
      onPress={() => navigation.navigate("Screen1")}
    >
      <Image source={ORDERS_ICON} />
      <Text style={stylesDrawer.drawerText}>Orders</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Screen2")}
    >
      <Image source={HEART_ICON} />
      <Text style={stylesDrawer.drawerText}>Favourites</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Screen2")}
    >
      <Image source={HELP_ICON} />
      <Text style={stylesDrawer.drawerText}>Help</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Screen2")}
    >
      <Image source={PROMOTION_ICON} />
      <Text style={stylesDrawer.drawerText}>Promotions</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Screen2")}
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

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        drawerStyle={stylesDrawer.drawer}
        screenOptions={{ drawerPosition: "right" }}
        drawerContent={(props) => <LeftDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Screen1" component={Screen160} />
        <Drawer.Screen name="Screen2" component={Screen92} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

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

export default App;
