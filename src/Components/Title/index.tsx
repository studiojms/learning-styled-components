import React from 'react';

const Title: React.FC<{}> = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};

export default Title;
