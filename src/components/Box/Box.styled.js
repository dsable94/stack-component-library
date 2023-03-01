import styled, {css} from "styled-components";
import * as variable from "../../variable";

export const StyledBox = styled.div`
${props => props.border ? css ` border: ${props.border};`: css `` }  
${props => props.borderRight ? css ` border-right: ${props.borderRight};`: css `` }  
${props => props.borderLeft ? css ` border-left: ${props.borderLeft};`: css `` }  
${props => props.borderTop ? css ` border-top: ${props.borderTop};`: css `` }  
${props => props.borderBottom ? css ` border-bottom: ${props.borderBottom};`: css `` }  
${props => props.borderRadius ? css ` border-radius: ${props.borderRadius};`: css `` }  
${props => props.bgColor ? css ` background-color: ${props.bgColor};`: css `` } 
${props => props.opacity ? css ` opacity: ${props.opacity};`: css `` }
${props => props.width ? css ` width: ${props.width};`: css `` }
${props => props.background ? css ` background: ${props.background};`: css `` }
${props => props.bgImg ? css ` 
    background-image: ${props.bgImg};
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

`: css `` }


    ${props =>
    props.display ?
    css `
    display: ${props.display};
    `:
    css `
    display:block;
    `
    }
    ${props=>
        props.textAlign === "center"
        ? css `
        text-align: center;`
        :
        props.textAlign === "left"
        ? css `
        text-align: left;`
        :
        props.textAlign === "right"
        ? css `
        text-align: right;`
        : css ``
        }
    ${props =>
        props.p ?
        css `
        padding: ${props.p};
        `:
        css `
        padding:0px;
        `
        }
        ${props => props.m ? css ` margin: ${props.m};`: css ` margin:0px; ` } 
        ${props => props.mt ? css ` margin-top: ${props.mt};`: css `` } 
        ${props => props.mb ? css ` margin-bottom: ${props.mb};`: css `` } 
        ${props => props.ml ? css ` margin-left: ${props.ml};`: css `` } 
        ${props => props.mr ? css ` margin-right: ${props.mr};`: css ` ` } 
        ${props => props.pt ? css ` padding-top: ${props.pt};`: css ` ` } 
        ${props => props.pb ? css ` padding-bottom: ${props.pb};`: css ` ` } 
        ${props => props.pl ? css ` padding-left: ${props.pl};`: css `` } 
        ${props => props.pr ? css ` padding-right: ${props.pr};`: css `` }
       

       
    ${props =>
        props.justifyItems === 'center'
        ? css `
        justify-items: center;
        `
        : props.justifyItems === 'flex-start'
        ? css `
        justify-items: flex-start;
        `
        : props.justifyItems === 'flex-end'
        ? css `
        justify-items: flex-end;
        `
        : props.justifyItems === 'space-between'
        ? css `
        justify-items: space-between;
        `
        : props.justifyItems === 'space-around'
        ? css `
        justify-items: space-around;
        `
        : props.justifyItems === 'space-evenly'
        ? css `
        justify-items: space-evenly;
        `
        : props.justifyItems === 'stretch'
        ? css `
        justify-items: stretch;
        `
        : props.justifyItems === 'self-start'
        ? css `
        justify-items: self-start;
        `
        : props.justifyItems === 'left'
        ? css `
        justify-items: left;
        `
        : props.justifyItems === 'right'
        ? css `
        justify-items: right;
        `
        : props.justifyItems === 'start'
        ? css `
        justify-items: start;
        `
        : props.justifyItems === 'end'
        ? css `
        justify-items: end;
        `
        : props.justifyItems === 'baseline'
        ? css `
        justify-items: baseline;
        `
        : props.justifyItems === 'first-baseline'
        ? css `
        justify-items: first baseline;
        `
        : props.justifyItems === 'last-baseline'
        ? css `
        justify-items: last baseline;
        `
        : css`
        `
    }
    ${props => 
        props.justifyContent === 'flex-start'
        ? css `
        justify-content: flex-start;
        `
        :props.justifyContent === 'flex-end'
        ? css `
        justify-content: flex-end;
        `
        :props.justifyContent === 'center'
        ? css `
        justify-content: center;
        `
        :props.justifyContent === 'space-between'
        ? css `
        justify-content: space-between;
        `
        :props.justifyContent === 'space-around'
        ? css `
        justify-content: space-around;
        `
        :props.justifyContent === 'start'
        ? css `
        justify-content: start;
        `
        :props.justifyContent === 'end'
        ? css `
        justify-content: end;
        `
        :props.justifyContent === 'left'
        ? css `
        justify-content: left;
        `
        :props.justifyContent === 'right'
        ? css `
        justify-content: right;
        `
        :props.justifyContent === 'space-evenly'
        ? css `
        justify-content: space-evenly;
        `
        : css`
        `
    }
    ${props => 
        props.alignItems === 'flex-start'
        ? css `
        align-items: flex-start;
        `
        :props.alignItems === 'flex-end'
        ? css `
        align-items: flex-end;
        `
        :props.alignItems === 'center'
        ? css `
        align-items: center;
        `
        :props.alignItems === 'stretch'
        ? css `
        align-items: stretch;
        `
        :props.alignItems === 'baseline'
        ? css `
        align-items: baseline;
        `
        :props.alignItems === 'start'
        ? css `
        align-items: start;
        `
        :props.alignItems === 'end'
        ? css `
        align-items: end;
        `
        :props.alignItems === 'first-baseline'
        ? css `
        align-items: first baseline;
        `
        :props.alignItems === 'last baseline'
        ? css `
        align-items: last-baseline;
        `
        :props.alignItems === 'self-start'
        ? css `
        align-items: self-start;
        `
        :props.alignItems === 'self-end'
        ? css `
        align-items: self-end;
        `
        : css`
        `
    }
    ${props => 
        props.flexWrap === 'nowrap'
        ? css `
        flex-wrap: nowrap
        `
        : props.flexWrap === 'wrap'
        ? css `
        flex-wrap: wrap;
        `
        : props.flexWrap === 'wrap-reverse'
        ? css `
        flex-wrap: wrap-reverse
        `
        : css`
        `
    }
    ${props => 
        props.flexDirection === 'column'
        ? css `
        flex-direction: column;
        `
        : props.flexDirection === 'column-reverse'
        ? css `
        flex-direction: column-reverse
        `
        : props.flexDirection === 'initial'
        ? css `
        flex-direction: initial
        `
        : props.flexDirection === 'row'
        ? css `
        flex-direction: row
        `
        : props.flexDirection === 'row-reverse'
        ? css `
        flex-direction: row-reverse
        `
        :props.flexDirection === 'unset'
        ? css `
        flex-direction: unset;
        `
        : css `
        flex-direction: inherit
        `
    }

    ${props => 
       props.alignSelf === 'flex-start'
        ? css `
        flex-direction: flex-start
        `
        : props.alignSelf === 'flex-end'
        ? css `
        flex-direction: flex-end
        `
        : props.alignSelf === 'center'
        ? css `
        flex-direction: center
        `
        : props.alignSelf === 'baseline'
        ? css `
        flex-direction: baseline
        `
        :props.alignSelf === 'stretch'
        ? css `
        flex-direction: stretch;
        `
        : css `
        flex-direction: auto
        `
    }

   
`