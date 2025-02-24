import styled from "styled-components";
import { Color, FontWeight } from "../../enums";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 400px;
  height: 550px;
  background-color: ${Color.Blue300};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
`;

export const Header = styled.h1`
  color: ${Color.White};
  font-size: 32px;
  font-weight: ${FontWeight.Light};
`;