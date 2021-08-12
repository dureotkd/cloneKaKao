import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { UserConsumer } from "./contexts/User";
import styled from "styled-components/native";
import moment from "moment";

import {
  StyledText,
  Container,
  Friends,
  ProfileText,
  ProfileIntro,
  DetailText,
  IntroText,
} from "../assets/css/";

import Modal from "react-native-modal";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const nowDate = moment().format("Y-MM-DD");

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [modalVisi, setModalVisi] = useState(false);
  const [clickUser, setClickUser] = useState({});
  const [friends, setFriends] = useState([
    {
      id: 0,
      name: "성민",
      birthDay: "2021-08-12",
      stateText: "사랑해",
      profile: "https://avatars.githubusercontent.com/u/63378895?v=4",
    },
    {
      id: 1,
      name: "민지",
      birthDay: "2021-08-13",
      stateText: "오늘도 힘차게!",
      profile:
        "https://image.fmkorea.com/files/attach/new/20210210/14339012/2059023680/3383659870/87cd813eb763c74c752a2e584f4a8820.jpg",
    },
    {
      id: 6,
      name: "카카오 회장",
      birthDay: "2021-08-13",
      stateText: "더 나은 미래를 위해..",
      profile:
        "https://img9.yna.co.kr/photo/cms/2021/02/20/03/PCM20210220000103505_P2.jpg",
    },
    {
      id: 1100,
      name: "이재용",
      birthDay: "2021-08-13",
      stateText: "사람들을 위해서..",
      profile:
        "https://lh3.googleusercontent.com/proxy/4sVng7XEg2ZTiFJHSHdwRGppIjLZSPb37rb_9LIwAw3d7SJes1dbpUxAfME35Do7bxhZF-6hSVdh2TfxBqsSHUOyVr3bucyjXuD7TXpqfjEX",
    },
    {
      id: 1902,
      name: "루피",
      birthDay: "2021-08-13",
      stateText: "ㅋㅋ",
      profile:
        "https://w.namu.la/s/4e05724c23f1f7bc8de97af07f6f52d4cc63996751d152e1c813e898927525b1f8e6cc009ea127392317184058996a346c3853c4e569f409d7514881175e10324b3aae6e435b8c37cb5d2e2d0b8dd5af4098832fc3569cdb2bc3a583ce4f316f54692d11942bcd8af9b18b5f8521de61",
    },
    {
      id: 110505,
      name: "아이유",
      birthDay: "2021-08-13",
      stateText: "나도",
      profile:
        "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2c0934937c3a04bcd1909862d344c6b1e7b31ac9b2eed7531df31c6c6095142c754588b0f2b636c0c4fe1b643540393a",
    },

    {
      id: 3,
      name: "장원영",
      birthDay: "2021-08-13",
      stateText: "나도",
      profile:
        "https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=20210428164404074249f2741072510624586229.jpg",
    },
    {
      id: 4,
      name: "누누",
      birthDay: "2021-08-13",
      stateText: "나도",
      profile: "https://i.ytimg.com/vi/yCDgNPWQnic/hqdefault.jpg",
    },
    {
      id: 5,
      name: "람머스",
      birthDay: "2021-08-13",
      stateText: "나도",
      profile:
        "data:image/jpeg;base64,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",
    },
  ]);

  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            style={{ marginRight: 10, color: "white" }}
          />
        );
      },
    });
  }, []);

  const handleClickUser = (id) => {
    const clone = [...friends];
    const obj = clone[id];

    setClickUser(obj);
    setModalVisi(true);
  };

  return (
    <Container insets={insets}>
      <Friends>
        {friends.map((val, idx) => {
          return (
            <TouchableOpacity
              style={{
                padding: 15,
              }}
              onPress={handleClickUser.bind(this, idx)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 15 }}
                  source={{
                    uri: val.profile,
                  }}
                />
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ProfileText>{val.name}</ProfileText>
                    {val.birthDay === nowDate ? (
                      <MaterialCommunityIcons
                        name="cake"
                        color="#ff8a65"
                        style={{ marginLeft: 5 }}
                      />
                    ) : null}
                  </View>
                  <ProfileIntro>{val.stateText}</ProfileIntro>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </Friends>
      <Modal
        isVisible={modalVisi}
        useNativeDriver={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hideModalContentWhileAnimating={true}
        style={{ justifyContent: "center", alignItems: "center" }}
        onRequestClose={() => {
          setModalVisi(false);
        }}
      >
        <View
          style={{
            width: windowWidth - 100,
            height: 500,
            backgroundColor: "#212121",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200,
              marginTop: 50,
              borderRadius: 10,
            }}
            source={{
              uri: clickUser?.profile,
            }}
          ></Image>
          <DetailText>{clickUser?.name}</DetailText>
          <IntroText style={{ flex: 1 }}>{clickUser?.stateText}</IntroText>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "white",
              width: windowWidth - 100,
              height: 120,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisi(false)}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                }}
              >
                <MaterialCommunityIcons
                  name="home-export-outline"
                  color="white"
                  size={30}
                />
                <Text style={{ color: "white", marginTop: 10 }}>뒤로가기</Text>
              </TouchableOpacity>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="chat-outline"
                  color="white"
                  size={30}
                />
                <Text style={{ color: "white", marginTop: 10 }}>1:1 채팅</Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  color="white"
                  size={30}
                />
                <Text style={{ color: "white", marginTop: 10 }}>
                  프로필 편집
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        title="List"
        onPress={() => {
          navigation.navigate("List");
        }}
      ></Button>
    </Container>
  );
};

export default Home;
