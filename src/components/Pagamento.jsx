import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Pagamento = ({ livros, total, carrrinho, setCarrinho }) => {
  const navigate = useNavigate();

  const [metodoPagamento, setMetodoPagamento] = useState("");

  const handleMetodoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    if (!metodoPagamento) {
      alert("Por favor, selecione um método de pagamento.");
      return;
    }
    setCarrinho([]);
    setTimeout(() => {
      alert(
        `Pagamento de R$${total
          .toFixed(2)
          .replace(".", ",")} via ${metodoPagamento} processado com sucesso!`
      );
    }, 1000);
    setTimeout(() => {
      navigate("/carrinho");
    }, 2000);
  };

  return (
    <>
      <h2>Pagamento</h2>
      <div>
        <p>Valor total: R${total.toFixed(2).replace(".", ",")}</p>
        <form onSubmit={handleSubmit} className="payment-select">
          <label htmlFor="metodo" className="form-title">
            Método de pagamento
          </label>
          <div className="cartao">
            <input
              type="radio"
              name="metodo"
              value="cartao"
              id="cartao"
              checked={metodoPagamento === "cartao"}
              onChange={handleMetodoChange}
            />
            <label htmlFor="cartao">Cartão de crédito</label>
          </div>
          <div className="boleto">
            <input
              type="radio"
              name="metodo"
              value="boleto"
              id="boleto"
              checked={metodoPagamento === "boleto"}
              onChange={handleMetodoChange}
            />
            <label htmlFor="boleto">Boleto bancário</label>
          </div>
          <div className="pix">
            <input
              type="radio"
              name="metodo"
              value="pix"
              id="pix"
              checked={metodoPagamento === "pix"}
              onChange={handleMetodoChange}
            />
            <label htmlFor="pix">Pix</label>
          </div>

          <div>
            <button type="submit" className="buy-button">
              Confirmar Pagamento
            </button>
          </div>
          <button>
            <Link to="/carrinho">Cancelar</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Pagamento;
