import React, { useState, useEffect } from "react";
import TableWrapper from "@/components/table-components/TableWarper";
import { Box } from "@mui/material";
import DynamicTable from "@/components/table-components/DynamicTable";
const EmployTable = () => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/table/employ.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {tableData && (
        <Box>
          <TableWrapper tableHeading={tableData.tableHeading} tableDiscription={tableData.tableDiscription}>
            <DynamicTable tableColumns={tableData.tableColumns} tableData={tableData.tableData} Search={tableData.search} />
          </TableWrapper>
        </Box>
      )}
    </>
  );
};

export default EmployTable;
