import Modal from "react-bootstrap/Modal";
import NewTweet from "./NewTweet";

function TweetModal({ show, handleClose }) {
  return (
    <div className="modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New tweet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <NewTweet />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TweetModal;
