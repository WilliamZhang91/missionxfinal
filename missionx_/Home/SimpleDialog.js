import React from "react";
import Dialog from "@material-ui/core/Dialog"; 
import { List, ListItem, DialogTitle, ListItemText } from "@material-ui/core";


export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <>
      <dialog onClose={handleClose} open={open}>
        <DialogTitle>Which Account Are You Using?</DialogTitle>
        <ListItem button onClick={() => handleListItemClick("test")}>
          <ListItemText primary="lol" />
        </ListItem>
      </dialog>
    </>
  );
}
