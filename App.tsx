import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type/task.object";
import { Screenaddworkout } from "./screens/menage";
import { Screenhome } from "./screens/home";
import { FilterScreen } from "./screens/filter";

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screenhome">
        <Stack.Screen name="Screenhome" component={Screenhome} />
        <Stack.Screen name="Screenaddworkout" component={Screenaddworkout} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
