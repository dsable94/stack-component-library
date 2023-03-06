import React from "react";
import { StyledAdvanceTable } from "./AdvanceTable.styled";
import { Pagination } from '../Pagination';

const AdvanceTable = (props) => {
  const { columns, data, title, selectableRows, fixedHeader, striped, pagination } = props;
  return (
   <StyledAdvanceTable
        title={title}
        columns={columns}
        data={data}
        selectableRows={selectableRows}
        pagination={pagination}
        paginationComponent={Pagination}
        {...props}
      />
  );
}

export default AdvanceTable;



