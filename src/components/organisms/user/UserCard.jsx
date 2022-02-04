import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  // const { user } = props;
  const { user, isAdmin } = props;
  return (
    // <div>
    <Card>
      {/* <img */}
      {/* height={160} */}
      {/* width={160} */}
      {/* // src="https://source.unsplash.com/IuJc2qh2TcA" */}
      {/* src={user.image} */}
      {/* // alt="プロフィール" */}
      {/* alt={user.name} */}
      {/* /> */}
      {/* <p>名前</p> */}
      {/* <p>{user.name}</p> */}
      {/* <dl> */}
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        {/* <dd>1111@aaa.com</dd> */}
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        {/* <dd>000-9999-88888</dd> */}
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        {/* <dd>あああああ会社</dd> */}
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        {/* <dd>htttttp.com</dd> */}
        <dd>{user.website}</dd>
      </SDl>
      {/* </dl> */}
    </Card>
    // </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
