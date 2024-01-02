import React from "react";
import styled from "styled-components";

import RegisterShow from "../components/RegisterShow";
const ProfileWrap = styled.div`
  margin-left: 115px;
  margin-top: 103px;
  > div {
    margin-top: 20px;
  }
`;

export default function Profile() {
  return (
    <ProfileWrap>
      <RegisterShow />
    </ProfileWrap>
  );
}
