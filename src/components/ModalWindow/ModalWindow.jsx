import React from "react";
import { Modal, Box } from "@mui/material";
import { useToggle } from "../hooks/useToggle";

export const ModalWindow = ({ isOpen, children }) => {
  const { closeModel } = useToggle();
  return (
    <Modal
      open={isOpen}
      onClose={closeModel}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          width: 400,
          height: 300,
          borderRadius: 5,
          margin: "auto",
          marginTop: 30,
          padding: 2,
          backgroundColor: "rgb(31 41 55)",
          boxShadow: "white",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
