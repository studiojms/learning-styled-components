import React from "react";

import bank_logo from "../../assets/images/bank_logo.svg";

const Header = () => {
  return (
    <div className="cabecalho">
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Header;
