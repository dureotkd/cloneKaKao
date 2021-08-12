import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { UserProvider } from "./components/contexts/User";
import AppLoading from "expo-app-loading";
import User from "./components/User";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./components/Home";
import List from "./components/List";
import Chat from "./components/Chat";

const Container = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
`;

const SmallText = styled.Text`
  font-size: 40px;
`;

export default function App() {
  const [isReady, clearReady] = useState(false);
  const Stack = createStackNavigator();

  const axiosData = {
    userNo: 1,
    companyNum: 11111111,
    name: "sungmin",
    nickName: "까리하게한방",
  };
  const UserContext = createContext(axiosData);

  const getData = () => {
    return true;
  };

  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => false,
          headerStyle: { backgroundColor: "#424242" },
          cardStyle: { backgroundColor: "red" },
          headerTitleStyle: { color: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "친구" }}
        ></Stack.Screen>
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: "채팅" }}
        ></Stack.Screen>
        <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getData}
      onFinish={() => {
        console.log("start!!!");
        clearReady(true);
      }}
      onError={() => console.log("error")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
