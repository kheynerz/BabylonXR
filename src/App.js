import React, { useState } from 'react';
import './style.css';

import RoomCard from './RoomCard';

import Room from './Room';
import Kitchen from './Kitchen';
import Bathroom from './Bathroom';

export default function App() {
  const [currentRoom, setcurrentRoom] = useState('');

  const home = [
    {
      name: 'Room',
      description: '3D modeling of a Room',
    },
    { name: 'Kitchen', description: '3D modeling of a Kitchen' },
    { name: 'Bathroom', description: '3D modeling of a Bathroom' },
  ];

  const rooms = {
    Room: <Room />,
    Kitchen: <Kitchen />,
    Bathroom: <Bathroom />,
  };

  const handleClick = (name) => {
    setcurrentRoom(name);
  };

  if (currentRoom != '') {
    return rooms[currentRoom];
  }

  return (
    <>
      <h1>Norkus</h1>
      <div className="home">
        {home.map(({ name, description }, index) => (
          <RoomCard
            key={index}
            name={name}
            description={description}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}
