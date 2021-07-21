import styled, {css} from "styled-components";
import * as variable from "../../variable";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const StyledRow = styled(Row)`
    
`
const StyledCol = styled(Col)`
&.temp {padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: #bbeffd;
    border: 1px solid #61dafb;}

    ${props => props.bgColor ? css ` background-color: ${props.bgColor};`: css `` }    
    
`
const StyledContainer = styled(Container)`
    
`

export {StyledRow,StyledCol,StyledContainer};