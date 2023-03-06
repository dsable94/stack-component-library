import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Image from 'react-bootstrap/Image'

export const StyledImage = styled(Image)`
 
  ${props =>
  props.width
  ? css `
    width:${props.width};
  `
  :css `
    width:auto;
  `
  }
  ${props =>
  props.height
  ? css `
    height:${props.height};
  `
  :css `
  height:auto;
  `
  }
  ${props =>
  props.filter
  ? css `
    filter:${props.filter};
  `
  :css `
  filter:none;
  `
  }
`