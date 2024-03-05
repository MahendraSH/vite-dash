import PropTypes from "prop-types";

import MainCard from "@/components/main-card";
import { Box } from "@mui/material";

const TableCard = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: "95%", md: "90%" },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);

TableCard.propTypes = {
  children: PropTypes.node,
};

export default TableCard;
