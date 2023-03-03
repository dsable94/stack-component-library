import React from "react";
import { StyledAvatar, StyledAvatarText, AvatarTitle, AvatarSubTitle } from './Avatar.styled';

const Avatar = (props) => {
  const { size, src, alt, title, subTitle, titleFont, subTitleFont, isBold,
  titleColor, subTitleColor } = props;
  return (
    <StyledAvatarText {...props}>
      <StyledAvatar size={size} src={src} alt={alt} >
      </StyledAvatar>
     { title && <AvatarTitle titleFont={titleFont} isBold={isBold} titleColor={titleColor} >
        {title}
       </AvatarTitle>}
      { subTitle && <AvatarSubTitle subTitleFont={subTitleFont} subTitleColor={subTitleColor}>
        {subTitle}
      </AvatarSubTitle> }
    </StyledAvatarText>
  );
}


export default Avatar;