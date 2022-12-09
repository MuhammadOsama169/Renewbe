import styled from 'styled-components';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Behance } from '@styled-icons/boxicons-logos/Behance';
import { Email } from '@styled-icons/material/Email';

export const InstagramIcon = styled(Instagram)`
  color: #fb2576;
  height: 50px;
  width: 50px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const LinkedinIcon = styled(LinkedinSquare)`
  color: #5b7db1;
  height: 50px;
  width: 50px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const BehanceIcon = styled(Behance)`
  color: #c147e9;
  height: 50px;
  width: 50px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const EmailIcon = styled(Email)`
  color: #7f5283;
  height: 50px;
  width: 50px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const StyledSocialIcons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const IconWrapperYoutube = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperInsta = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperTwitter = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperLinkdin = styled.a`
  text-decoration: none;
  padding: 10px;
`;
