import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #c8d5ef;
  height: 64px;
`;

export const NavBarLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const Link = styled.li`
  margin: 0px 10px;
`;

export const Icon = styled.span`
  margin: 0px 10px;
`;

export const Pill = styled.span`
  background: black;
  color: white;
  border-radius: 15px 15px;
  padding: 2px 12px;
`;

export const PillBorder = styled.span`
  margin: 0px 10px;
  padding: 5px;
  background: rgb(204, 0, 255);
  background: linear-gradient(
    183deg,
    rgba(204, 0, 255, 1) 0%,
    rgba(51, 0, 255, 1) 100%
  );
  border-radius: 15px 15px;
`;
