import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import TableCard from "./TableCard";
const TableWarper = ({ tableHeading, tableDiscription, children }) => {
  return (
    <TableCard>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {tableHeading}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {tableDiscription}
      </Typography>
      {children}
    </TableCard>
  );
};

TableWarper.prototypes = {
  tableHeading: PropTypes.string.isRequired,
  tableDiscription: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default TableWarper;
