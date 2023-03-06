import styled, {css} from "styled-components";
import Table from 'react-bootstrap/Table';


const StyledTable = styled(Table)`
    ${props=>
        props.size==="xs"
        ? css `
        tr {
            height:.15rem; 
            }
        th, td {
                padding: 0.35rem; }
        `
        :props.size==="sm"
        ? css `
        height:.30rem;
        tr {
            height:.30rem; 
            }
        th, td {
                padding: 0.45rem; }
        `
        :props.size==="md"
        ? css `
        tr {
            height:.50rem; 
              }
         
        `
        :props.size==="lg"
        ? css `
        height:2rem;
        tr {
            height:2rem; 
            }
        th, td {
                padding: 1rem; }
        `
        :css `
        height:1rem;
        `
    }
    
    ${props =>
        props.heights
        ? css `
        height: ${props.heights};
        `
        : css ``
    }
`

export default StyledTable;