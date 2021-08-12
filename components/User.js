import React from "react";
import { UserConsumer } from "./contexts/User";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const User = () => {
  return (
    <UserConsumer>
      {({ name }) => <StyledText>Name : {name}</StyledText>}
    </UserConsumer>
  );
};

export default User;
