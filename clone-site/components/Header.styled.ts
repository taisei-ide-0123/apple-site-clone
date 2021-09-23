import styled from 'styled-components';
import { Box } from './Box.styled';

export const HeaderContainer = styled.div`
  display: block;
  width: 100vw;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
`;

export const DesktopHeaderMenuContainer = styled(Box)`
  height: 44px;
  width: 90%;
  justify-content: space-between;
  z-index: 1;
  margin: auto;
`;

export const DesktopHeaderIcon = styled.img``;
