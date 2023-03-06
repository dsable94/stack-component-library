import styled, {css} from "styled-components";
import DataTable from 'react-data-table-component';


export const StyledAdvanceTable = styled(DataTable)`
    .rdt_TableHeadRow {
        div[role=button] {
            span{
               visibility:hidden
                &:after{
                    content:'\2191'; 
                    visibility: visible !important;
                    display: block;
                }
            }
        }
    }
`;