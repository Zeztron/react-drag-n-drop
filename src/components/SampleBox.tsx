import React from 'react';
import useDragger from '../hooks/useDragger';

const SampleBox: React.FC = () => {
  useDragger('sample-box');

  return (
    <div
      id="sample-box"
      className="sample-box"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span>Drag me!</span>
    </div>
  );
};

export default SampleBox;
