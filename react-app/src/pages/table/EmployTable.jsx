import React, { useState, useEffect } from "react";
import TableWrapper from "@/components/table-components/TableWarper";
import { Box } from "@mui/material";
import DynamicTable from "@/components/table-components/DynamicTable";
import { useGetTableDataQuery } from "@/app/features/dataApiSlice";
import { useParams } from "react-router-dom";
const EmployTable = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const { data, isError, isSuccess, error } = useGetTableDataQuery({ id });
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (isSuccess) {
    const tableData = data;

    return (
      <>
        {tableData && (
          <Box>
            <TableWrapper tableHeading={tableData.tableHeading} tableDiscription={tableData.tableDiscription}>
              <DynamicTable
                tableColumns={tableData.tableColumns}
                tableData={tableData.tableData}
                Search={tableData.search}
              />
            </TableWrapper>
          </Box>
        )}
      </>
    );
  }
};

export default EmployTable;
