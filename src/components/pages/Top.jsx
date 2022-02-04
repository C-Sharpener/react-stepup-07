import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  // const onClickAdmin = () => alert("管理者");
  // const onClickAdmin = () => history.push("/users");
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  // const onClickGeneral = () => alert("一般");
  // const onClickGeneral = () => history.push("/users");
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>TOPページです</h2>
      {/* <SecondaryButton>管理者ユーザー</SecondaryButton> */}
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      {/* <SecondaryButton>一般ユーザー</SecondaryButton> */}
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;