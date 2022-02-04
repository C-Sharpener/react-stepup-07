import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    // <header>
    <SHeader>
      {/* <Link to="/">HOME</Link> */}
      <SLink to="/">HOME</SLink>
      {/* <Link to="/users">USERS</Link> */}
      <SLink to="/users">USERS</SLink>
    </SHeader>
    // </header>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
