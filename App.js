import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDrawer from "./HomeDrawer";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
