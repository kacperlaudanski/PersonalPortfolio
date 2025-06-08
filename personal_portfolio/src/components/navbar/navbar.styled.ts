import { css, styled } from 'styled-components';

import { Color } from '../../enums';

import EnImage from './images/en.png';
import PlImage from './images/pl.png';

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${Color.Gray200};
  z-index: 1;
`;

export const TileContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${Color.Gray200};
`;

export const ItemsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  border: 1px solid ${Color.Gray200};
`;

export const languageButtonStyles = css`
  width: 25px;
  height: 17px;
  background-size: cover;
  background-position: center;
  border: none;
`;

export const PlLanguageButton = styled.button`
  ${languageButtonStyles};
  background-image: url(${PlImage});

`;

export const EnLanguageButton = styled.button`
  ${languageButtonStyles};
  background-image: url(${EnImage});
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;
