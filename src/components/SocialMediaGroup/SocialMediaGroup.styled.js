import styled, {css} from "styled-components";


const StyledSocialMediaGroup = styled.div`

${props=> props.color ? css `
    a {
        color: ${props.color};
    }
` : css `
        a {
            color: #cecaca;
        }
`}
${props=> props.size ? css `
    a {
        font-size: ${props.size};
    }
 `
  : css ``}

 ${props => props.isRound ===true ? css `
 a {
    height: 2rem;
    width: 2rem;
    line-height: calc(2rem - 4px);
    display: flex;
    border: 2px solid;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 8px;
}
 `
 : css `` }

 ${props=> props.bgColor ? css `
 a {
    background: ${props.bgColor};
 }
`
: css ``}

 

`
export default StyledSocialMediaGroup;