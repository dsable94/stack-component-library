import styled, {css} from "styled-components";

export const StyledAvatarText = styled.div`

`
export const AvatarTitle = styled.div`
${props=> props.titleFont ? css ` font-size: ${props.titleFont};` : css ``}
${props=> props.isBold ? css ` font-weight: ${props.isBold};` : css ``}
${props=> props.titleColor ? css ` color: ${props.titleColor};` : css ``}

`
export const AvatarSubTitle = styled.div`
${props=> props.subTitleFont ? css ` font-size: ${props.subTitleFont};` : css ``}
${props=> props.subTitleColor ? css ` color: ${props.subTitleColor};` : css ``}

`

export const StyledAvatar = styled.img`
  vertical-align: middle;
  border-radius: 9999px;
  margin-bottom: 10px;
  ${props =>
  props.size === 'sm'
  ? css `
  height: 35px;
  width: 35px;
  `
  : props.size === 'lg'
  ? css `
  height: 75px;
  width: 75px;
  `
  : css `
  height: 50px;
  width: 50px;
  `
  }
  
`