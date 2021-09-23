import {
  HeaderContainer,
  DesktopHeaderMenuContainer,
  DesktopHeaderIcon,
  MobileHeaderMenuContainer,
  MobileBarIconContainer,
  MenuBarIcon,
  MenuBarIconLine,
  MobileHeaderIcon,
  OpenMobileMenuContainer,
  OpenMobileMenuHeaderContainer,
  OpenHeaderTopContainer,
  CloseIcon,
  InputContainer,
  InputIcon,
  Input,
  InputSpace,
  OpenMenuContainer,
  OpenMenuWrapper,
  OpenMenuListRow,
  OpenMenuListImage,
} from './Header.styled';
import { useState } from 'react';

const Header = () => {
  const imagesArray = [
    '/apple-images/globalnav_apple_image__cxwwnrj0urau_large.svg',
    '/apple-images/globalnav_links_store_image__d8z9vxma66c2_large.svg',
    '/apple-images/globalnav_links_mac_image__fv4ktb435mum_large.svg',
    '/apple-images/globalnav_links_ipad_image__fefum478f4uq_large.svg',
    '/apple-images/globalnav_links_iphone_image__dhepc4hn14cy_large.svg',
    '/apple-images/globalnav_links_watch_image__dfo5u4bhooqe_large.svg',
    '/apple-images/globalnav_links_tv_image__dtzdy60o3imq_large.svg',
    '/apple-images/globalnav_links_music_image__bewxrazzig02_large.svg',
    '/apple-images/globalnav_links_support_image__b24reo1n4fbm_large.svg',
    '/apple-images/globalnav_search_image__fca9mfoh8a2q_large.svg',
    '/apple-images/globalnav_bag_image__bmix8075eg4i_large.svg',
  ];

  const [isToggled, setIsToggled] = useState(true);
  const onChangeClick = () => setIsToggled(!isToggled);
  const display = isToggled ? { display: 'none' } : { display: 'flex' };
  const disappear = !isToggled ? { display: 'none' } : { display: 'flex' };
  return (
    <HeaderContainer>
      {/* Desktop */}
      <DesktopHeaderMenuContainer>
        {imagesArray.map((image, i) => (
          <DesktopHeaderIcon src={image} key={i} />
        ))}
      </DesktopHeaderMenuContainer>
      {/* Mobile */}
      <MobileHeaderMenuContainer style={disappear}>
        <MobileBarIconContainer>
          <MenuBarIcon onClick={onChangeClick}>
            <MenuBarIconLine />
            <MenuBarIconLine />
          </MenuBarIcon>
        </MobileBarIconContainer>
        <MobileHeaderIcon src={imagesArray[0]} />
        <MobileHeaderIcon src={imagesArray[imagesArray.length - 1]} />
      </MobileHeaderMenuContainer>
      {/* After Opening */}
      <OpenMobileMenuContainer style={display}>
        <OpenMobileMenuHeaderContainer>
          <OpenHeaderTopContainer>
            <CloseIcon onClick={onChangeClick}>✕</CloseIcon>
            <MobileHeaderIcon src={imagesArray[0]} />
            <MobileHeaderIcon src={imagesArray[imagesArray.length - 1]} />
          </OpenHeaderTopContainer>
          <InputContainer>
            <InputIcon src="/apple-images/globalnav_search_image__fca9mfoh8a2q_large_gray.svg" />
            <Input placeholder="Search apple.com" />
            <InputSpace />
          </InputContainer>
        </OpenMobileMenuHeaderContainer>
        <OpenMenuContainer>
          <OpenMenuWrapper>
            {imagesArray.map((image, i) => {
              if (
                i != 0 &&
                i != imagesArray.length - 2 &&
                i != imagesArray.length - 1
              )
                return (
                  <OpenMenuListRow key={i}>
                    <OpenMenuListImage src={image} />
                  </OpenMenuListRow>
                );
            })}
          </OpenMenuWrapper>
        </OpenMenuContainer>
      </OpenMobileMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
