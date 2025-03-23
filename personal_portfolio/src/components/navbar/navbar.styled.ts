import { styled } from 'styled-components';

import { Color } from '../../enums';


/* TODO: add custom type for styled component */
export const Container = styled.nav`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 70px;
  height: 50px;
  background-color: ${Color.Blue100};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
export const NavItem = styled.li``;

export const LanguagePanel = styled.div`
  display: flex;
`;

export const LanguageButton = styled.button`
  background-image: url();
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;