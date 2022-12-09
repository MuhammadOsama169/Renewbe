import React from 'react';
import {
  StyledSocialIcons,
  InstagramIcon,
  EmailIcon,
  BehanceIcon,
  LinkedinIcon,
  IconWrapperLinkdin,
  IconWrapperTwitter,
  IconWrapperInsta,
  IconWrapperYoutube,
} from './Styles/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <IconWrapperInsta href="https://www.instagram.com/renewbeteam/">
        <InstagramIcon></InstagramIcon>
      </IconWrapperInsta>
      <IconWrapperLinkdin href="https://www.linkedin.com/company/renewbe/">
        <LinkedinIcon></LinkedinIcon>
      </IconWrapperLinkdin>
      <IconWrapperTwitter href="mailto:hello@renewbe.com?Subject=Some%20subject">
        <EmailIcon></EmailIcon>
      </IconWrapperTwitter>
      <IconWrapperYoutube href="https://www.behance.net/gallery/126712085/Solarity-Your-all-in-one-platform-to-go-solar">
        <BehanceIcon></BehanceIcon>
      </IconWrapperYoutube>
    </StyledSocialIcons>
  );
};
