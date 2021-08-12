import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container, StyledText, ScrollCon } from "../assets/css";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components";

const List = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [chatList, setChatList] = useState([
    { id: 0, name: "성민", age: "27" },
    { id: 1, name: "민지", age: "30" },
  ]);

  return (
    <ScrollCon insets={insets}>
      <View>
        {chatList.map(({ id, name }) => {
          return (
            <StyledText
              key={id}
              onPress={() => navigation.navigate("Chat", { id, name })}
            >
              {name}
            </StyledText>
          );
        })}
      </View>
    </ScrollCon>
  );
};

export default List;
