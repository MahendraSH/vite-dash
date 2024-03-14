import { DeleteOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import PropTypes from "prop-types";
import { useDeleteFormByIdMutation } from "@/app/features/dataApiSlice";
import toast from "react-hot-toast";

export default function AlertDialog({ isFormTable, handleClose, id }) {
  const [open, setOpen] = React.useState(false);
  const [DeleteForm, { isLoading }] = useDeleteFormByIdMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  // on conform delete

  const deleteForm = async () => {
    console.log("delete form", id);
    try {
      await DeleteForm({ id }).unwrap();
      toast.success(" Form Delted Succfully ");
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  };
  const deleteEntry = () => {
    console.log("delete entry");
  };

  const handleConformDelete = async () => {
    isFormTable ? await deleteForm() : deleteEntry();
    setOpen(false);
    handleClose();
  };
  const handleCloseAlert = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="error" size="small" startIcon={<DeleteOutlined />} onClick={handleClickOpen}>
        {isFormTable ? "Delete Form " : "Delete Entry "}
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete? This action cannot be undone.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fuga autem quidem quis voluptates
            officia, commodi repudiandae nulla perferendis suscipit molestias adipisci aliquid hic. Accusamus harum non
            illo rerum a.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleConformDelete} autoFocus>
            {isFormTable ? "Delete Form " : "Delete Entry "}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

AlertDialog.protoTypes = {
  isFormTable: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
