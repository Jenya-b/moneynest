import Modal from '@mui/material/Modal';

interface ModalProps {
  children: JSX.Element;
  open: boolean;
  handleClose: () => void;
}

export const BasicModal = ({ open, handleClose, children }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
};
