import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import DynamicForm from "../form-components/DynamicForms";
import { bool, func, string } from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid  primary ",
  borderRadius: "1rem",
  boxShadow: 24,
  p: { sm: 4, md: 6, lg: 8 },
};

const AddEditEntry = ({ label, onClose, onOpen, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add {label}
          </Typography>

          <DynamicForm
            formConfig={JSON.parse(`{
  "items": [
    {
      "label": "First Name",
      "type": "input-text",
      "name": "firstName"
    },
    {
      "label": "Last Name",
      "type": "input-text",
      "name": "lastName"
    },
    {
      "label": "Password",
      "type": "input-text",
      "name": "password"
    },
    {
      "label": "Email",
      "type": "input-text",
      "name": "email"
    },
    {
      "label": "Company Name",
      "type": "input-text",
      "name": "companyName"
    }
  ]
}
`)}
          />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            add all the fields are required
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
AddEditEntry.propTypes = {
  label: string.isRequired,
  onClose: func.isRequired,
  onOpen: func.isRequired,
  open: bool.isRequired,
};

export default AddEditEntry;
