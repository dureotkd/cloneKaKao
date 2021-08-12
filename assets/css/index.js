import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const HomeHeader = styled.View`
  background-color: tomato;
  width: 100%;
`;

const Friends = styled.ScrollView`
  height: 100%;
  background-color: #424242;
`;

const ScrollCon = styled.ScrollView`
  padding-top: ${({ insets: { top } }) => top}px;
  padding-left: ${({ insets: { left } }) => left}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  padding-right: ${({ insets: { right } }) => right}px;
  width: 100%;
`;
const ProfileText = styled.Text`
  color: white;
  font-size: 15;
  margin-left: 10;
`;

const DetailText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
  margin-top: 10;
`;

const IntroText = styled.Text`
  color: #e0e0e0;
  font-size: 16;
  margin-top: 10;
`;

const ProfileIntro = styled.Text`
  color: #9e9e9e;
  font-size: 12;
  margin-top: 5;
  margin-left: 10;
`;

const Container = styled.View`
  background-color: #424242;
  height: 100%;
`;

export {
  StyledText,
  Container,
  ScrollCon,
  HomeHeader,
  Friends,
  ProfileText,
  ProfileIntro,
  DetailText,
  IntroText,
};
