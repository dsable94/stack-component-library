import styled, {css} from "styled-components";
import Button from 'react-bootstrap/Button'


const ToolTipWrap = styled(Button)`{
    color: ${props => props.textColor};
    background-color: ${props => props.bgColor};
    border-color: ${props => props.borderColor};
    &:hover {
        color: ${props => props.hoverTextColor};
    background-color: ${props => props.hoverBgColor};
    border-color: ${props => props.hoverBorderColor};
    }
}`
export default ToolTipWrap;
