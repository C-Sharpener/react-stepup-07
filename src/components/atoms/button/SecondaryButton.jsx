import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  // const { children } = props;
  const { children, onClick } = props;
  // return <button>{children}</button>;
  // return <SButton>{children}</SButton>;
  return <SButton onClick={onClick}>{children}</SButton>;
};

// const SButton = styled.button`
const SButton = styled(BaseButton)`
  background-color: #11999e;
  /* color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  } */
`;
