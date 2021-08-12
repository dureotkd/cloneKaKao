import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { StyledText, Container, ScrollCon } from "../assets/css";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Chat = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <StyledText>{route.params.name}</StyledText>
    </Container>
  );
};

export default Chat;
