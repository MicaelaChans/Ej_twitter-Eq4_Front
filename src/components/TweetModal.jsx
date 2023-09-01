import React from "react";
import NewTweet from "./NewTweet";
import Modal from "react-bootstrap/Modal";

function TweetModal() {
  return (
    <div className="modal show">
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>New tweet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p> NewTweet </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TweetModal;
