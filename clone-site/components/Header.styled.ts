import styled from 'styled-components';
import { Box } from './Box.styled';
import { Col } from './Col.styled';

export const HeaderContainer = styled.div`
  display: block;
  width: 100vw;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
`;

// Desktop

export const DesktopHeaderMenuContainer = styled(Box)`
  height: 44px;
  width: 90%;
  justify-content: space-between;
  z-index: 1;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DesktopHeaderIcon = styled.img`
  cursor: pointer;
`;

// Mobile

export const MobileBarIconContainer = styled(Box)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MenuBarIcon = styled(Col)`
  justify-content: space-between;
  align-content: flex-start;
  height: 8px;
`;

export const MenuBarIconLine = styled.div`
  background: #fff;
  height: 1px;
  width: 17px;
  cursor: pointer;
`;

export const MobileHeaderMenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    height: 48px;
    width: 100%;
    justify-content: space-between;
    z-index: 1;
    padding: 0 16px;
  }
`;

export const MobileHeaderIcon = styled.img`
  width: 17px;
  cursor: pointer;
`;

// OpenMobileMenu

export const OpenMobileMenuContainer = styled(Col)`
  width: 100vw;
  height: 100vh;
  background: #1d1d1f;
`;

export const OpenMobileMenuHeaderContainer = styled(Col)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const OpenHeaderTopContainer = styled(Box)`
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const CloseIcon = styled.div`
  font-size: 20px;
  color: #6e6e73;
  cursor: pointer;
`;

export const InputContainer = styled(Box)`
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #424245;
`;

export const InputIconContainer = styled(Box)`
  justify-content: center;
  align-items: center;
`;

export const InputIcon = styled.img`
  width: 30px;
  height: 37px;
  margin-left: 80px;
  padding-left: 10px;
  background: rgba(100, 100, 100, 0.13);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  @media (max-width: 450px) {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 37px;
  margin-bottom: 15px;
  border: none;
  background: rgba(100, 100, 100, 0.13);
  color: #6e6e73;
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  padding-left: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const InputSpace = styled.div`
  height: 37px;
  width: 80px;
  @media (max-width: 450px) {
    width: 10px;
  }
`;

export const OpenMenuContainer = styled(Box)`
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background: #1d1d1f;
  z-index: 100;
`;

export const OpenMenuWrapper = styled(Col)`
  margin: 0 80px;
  width: 100%;
  @media (max-width: 450px) {
    margin: 0 40px;
  }
`;

export const OpenMenuListRow = styled(Box)`
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #424245;
  max-height: 46px;
`;

export const OpenMenuListImage = styled.img`
  height: 50px;
`;
