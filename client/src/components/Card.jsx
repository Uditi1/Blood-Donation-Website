import React from 'react';
import Draggable from 'react-draggable';

const Card = ({ title, description }) => {
  return (
    <Draggable>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Draggable>
  );
};

export default Card;


