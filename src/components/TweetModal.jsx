import React from "react";
import Modal from "react-bootstrap/Modal";
import NewTweet from "./NewTweet";

function TweetModal() {
  const [show, setShow] = useState(false);

  //hacer llamada

  const handleClose = () => setShow(false);

  return (
    <div className="modal show">
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
