import React from 'react';

const Titulo: React.FC<{}> = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};

export default Titulo;
