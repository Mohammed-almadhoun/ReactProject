import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

function Main() {
  const [showModal, setShowModal] = useState(Array(data.length).fill(false));
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Added state for search query

  const handleClose = () => {
    setShowModal(Array(data.length).fill(false));
    setSelectedItem(null);
  };

  const handleShow = (index) => {
    setSelectedItem(index);
    const newShowModal = [...showModal];
    newShowModal[index] = true;
    setShowModal(newShowModal);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchedValue = event.target.search.value.toLowerCase();

    setSearchQuery(searchedValue);
  };

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "2%" }}>
        {filteredItems.map((item, index) => (
          <React.Fragment key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>

                <Button variant="primary" onClick={() => handleShow(index)}>
                  Show details
                </Button>
              </Card.Body>
            </Card>

            <Modal show={showModal[index]} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{item.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{item.description}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Main;
