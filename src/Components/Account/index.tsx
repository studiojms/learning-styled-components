import React, { useState } from "react";

import privateIcon from "../../assets/images/private.svg";
import eyeIcon from "../../assets/images/eye.svg";
import moneyIcon from "../../assets/images/money.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <img className="imagem-icone" src={moneyIcon} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="imagem-icone"
          src={toggleState ? privateIcon : eyeIcon}
          alt="Privacidade do Saldo"
        />
      </button>
    </div>
  );
};

export default Account;