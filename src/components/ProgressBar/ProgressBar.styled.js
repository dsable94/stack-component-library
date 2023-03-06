import styled, {css} from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar'


const ProgressStyle = styled(ProgressBar)`
    ${props=>
        props.size==="xs"
        ? css `
            height:.15rem;
        `
        :props.size==="sm"
        ? css `
        height:.30rem;
        `
        :props.size==="md"
        ? css `
        height:2rem;
        `
        :props.size==="lg"
        ? css `
        height:2rem;
        `
        :css `
        height:1rem;
        `
    }
    ${props=>
    (props.size==="xs"| props.size==="sm"| props.size==="md" && props.label)
    ? css `
    
    `
    : css `
    `
    }
`

export default ProgressStyle;