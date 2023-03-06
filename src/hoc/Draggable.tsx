import React from 'react';

type Props = {
  children?: React.ReactNode;
  height?: number;
  width?: number;
  border?: boolean;
};

const Draggable = ({ children, height, width, border }: Props) => {
  return (
    <div
      id="parent-container"
      style={{
        height: height && `${height}px`,
        width: width && `${width}px`,
        border: border ? '1px solid black' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
