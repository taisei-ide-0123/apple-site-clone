import {
  HeaderContainer,
  DesktopHeaderMenuContainer,
  DesktopHeaderIcon,
} from './Header.styled';

const Header = () => {
  const desktopImagesArray = [
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
  return (
    <HeaderContainer>
      <DesktopHeaderMenuContainer>
        {desktopImagesArray.map((image, i) => (
          <DesktopHeaderIcon src={image} key={i} />
        ))}
      </DesktopHeaderMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
