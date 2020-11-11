import React from "react";

import Title from "../Title";
import Account from "../Account";

const Container = () => {
  return (
    <div className="container">
      <Title>Hello User!</Title>
      <section className="conteudo">
        <Account />
      </section>
    </div>
  );
};

export default Container;
