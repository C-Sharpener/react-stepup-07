import React, { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

// export const UserIconWithName = (props) => {
export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");

  // const { image, name } = props;
  // const { image, name, isAdmin } = props;
  const { image, name } = props;
  // const context = useContext(UserContext);
  // console.log(context);
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    // <div>
    <SContainer>
      {/* <img height={160} width={160} src={user.image} alt={user.name} /> */}
      {/* <img height={160} width={160} src={image} alt={name} /> */}
      <SImg height={160} width={160} src={image} alt={name} />
      {/* <p>{user.name}</p> */}
      {/* <p>{name}</p> */}
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
    // </div>
  );
});
// };

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
