import css from "./ImageModal.module.css";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const ImageModal = ({ modalIsOpen, closeModal, selectedImage }) => {
  console.log(selectedImage);
  return (
    <div className="modal">
      <Modal
        isOpen={modalIsOpen}
        className={css.modalImage}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
            marginTop: "100px",
            padding: "20px",
          },
        }}
        // style={customStyles}
        contentLabel="Image Modal"
      >
        {selectedImage && <img src={selectedImage} alt="Modal" />}
      </Modal>
    </div>
  );
};

export default ImageModal;
