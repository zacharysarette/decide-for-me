import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ selectedOption, handleClose }) => (
  <Modal
    className="modal"
    isOpen={!!selectedOption}
    onRequestClose={handleClose}
    closeTimeoutMS={200}
    contentLabel="Selected Option"
  >
    <h3 className="modal__title">Decision:</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button
      className="button"
      onClick={handleClose}
    >
      Close
    </button>
  </Modal>
)

export default OptionModal
