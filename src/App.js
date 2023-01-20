import React, { useState } from 'react';
import './style.css';

import RoomCard from './RoomCard';

import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';
import Bathroom from './Bathroom';
import Room from './Room';
import Auditorium from './Auditorium';

export default function App() {
  const [currentRoom, setcurrentRoom] = useState('');

  const home = [
    {
      name: 'Living Room',
      description: '3D modeling of a Living Room',
    },
    { name: 'Kitchen', description: '3D modeling of a Kitchen' },
    { name: 'Bathroom', description: '3D modeling of a Bathroom' },

    { name: 'Room', description: '3D modeling of a Room' },
    { name: 'Auditorium', description: '3D modeling of a Auditorium' },
    { name: 'Bathroom', description: '3D modeling of a Bathroom' },
  ];

  const goBack = () => {
    setcurrentRoom('');
  };

  const rooms = {
    'Living Room': <LivingRoom goBack={goBack} />,
    Kitchen: <Kitchen goBack={goBack} />,
    Bathroom: <Bathroom goBack={goBack} />,
    Room: <Room goBack={goBack} />,
    Auditorium: <Auditorium goBack={goBack} />,
  };

  const handleClick = (name) => {
    setcurrentRoom(name);
  };

  if (currentRoom != '') {
    return rooms[currentRoom];
  }

  return (
    <>
      <h1>Web House Tour With Babylon JS</h1>
      <hr />
      <div className="home container">
        {home.map(({ name, description }, index) => (
          <RoomCard
            key={index}
            name={name}
            description={description}
            onClick={handleClick}
          />
        ))}
      </div>

      <footer className="footer">
        <h4>Web Tour Creators</h4>
        <hr />
        <p>Ronald Arce Matarmoros - 2020072053</p>
        <p>Sebastián Castro Román - 2020037165</p>
        <p>Mayckel Porras Rojas - 2020148949</p>
      </footer>
    </>
  );
}
