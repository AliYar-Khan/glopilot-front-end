import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen160 from "./screen_160";
import Screen92 from "./screen_92";
const Drawer = createDrawerNavigator();

function HomeScreen() {
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
      <Icon name="star" size={30} color="black" />
      <Text style={stylesDrawer.drawerText}>Item 1</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={stylesDrawer.drawerItem}
      onPress={() => navigation.navigate("Screen2")}
    >
      <Icon name="heart" size={30} color="black" />
      <Text style={stylesDrawer.drawerText}>Item 2</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerText: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default App;
