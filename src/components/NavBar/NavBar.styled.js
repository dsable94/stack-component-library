import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Navbar from 'react-bootstrap/Navbar';


// fixed, isDisabled, btnVariant, rounded, children, size, block, icon,iconVariant

const StyledNav = styled(Navbar)`
    padding: 6px 16px;
    border-radius: 4px;
    color: ${variable.white};
    ${props =>
        props.display ?
        css `
        display: ${props.display};
        `:
        css `
        display:block;
        `
        }
   
`

export default StyledNav;