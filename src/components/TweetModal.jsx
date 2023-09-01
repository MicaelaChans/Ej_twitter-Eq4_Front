import React from "react";
import Modal from "react-bootstrap/Modal";
import NewTweet from "./NewTweet";

function TweetModal() {
  return (
    <div className="modal show">
      <Modal>
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
