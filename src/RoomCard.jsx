import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RoomCard = ({ name, description, onClick }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => onClick(name)}>
          Enter VR Experience
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
