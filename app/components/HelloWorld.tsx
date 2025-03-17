// app/components/HelloWorld.tsx

import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Makes the div take up the entire viewport height
        fontSize: '2em',
        fontWeight: 'bold',
      }}
    >
      Hello, World!
    </div>
  );
};

export default HelloWorld;