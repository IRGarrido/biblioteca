import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Carrinho = ({ livros, carrinho, setCarrinho, total }) => {
  const navigate = useNavigate();
  const notify_remotion = () => toast.info("Livro removido");
  const notify_add = (resto) =>
    toast.info(
      resto == 0
        ? "Mais um exemplar adicionado à compra. Você atingiu o limite de estoque!"
        : "Mais um exemplar adicionado à compra. Ainda há " +
            resto +
            " disponíveis em estoque."
    );

  const remove = (id) => {
    notify_remotion();
    setCarrinho((prevCarrinho) => {
      const newCarrinho = prevCarrinho.filter((item) => item.id !== id);
      return newCarrinho;
    });
  };

  const increase = (id) => {
    const indexCarrinho = carrinho.findIndex((item) => item.id === id);
    const novoCarrinho = [...carrinho];
    const nova_quantidade = novoCarrinho[indexCarrinho].quantidade + 1;
    if (nova_quantidade <= livros[id].quantidade) {
      novoCarrinho[indexCarrinho] = {
        ...novoCarrinho[indexCarrinho],
        quantidade: nova_quantidade,
      };
      setCarrinho(novoCarrinho);
      notify_add(livros[id].quantidade - nova_quantidade);
    } else {
      toast.error("Quantidade além do estoque disponível.");
    }
  };
  
  const decrease = (id, item_quantidade) => {
    if (item_quantidade === 1) {
      remove(id);
    }
    toast.info("Quantidade reduzida.");
    setCarrinho((prevCarrinho) => {
      return prevCarrinho.map((item) => {
        if (item.id === id) {
          return { ...item, quantidade: item_quantidade - 1 };
        }
        return item;
      });
    });
  };

  const handlePagamento = () => {
    navigate("/carrinho/pagamento");
  };

  return (
    <>
      <h2>Livros adicionados</h2>
      {carrinho.length > 0 ? (
        <div className="carrinho-compras">
          {carrinho.map((itemCarrinho) => {
            const livro = livros[itemCarrinho.id];
            if (!livro) return null;
            return (
              <div className="carrinho" key={livro.id}>
                <div className="thumb">
                  <img
                    src={"/imgs/Capas/" + livro.id + ".jpg"}
                    alt={"Thumbnail para o livro"}
                  />
                </div>
                <div className="item">
                  <h3 className="titulo">{livro.titulo}</h3>
                  <p className="preco">
                    {" "}
                    R${" "}
                    {itemCarrinho.quantidade === 1
                      ? livro.preco + ",00"
                      : livro.preco +
                        ",00" +
                        " x " +
                        itemCarrinho.quantidade +
                        " = R$" +
                        parseFloat(livro.preco) * itemCarrinho.quantidade +
                        ",00"}
                  </p>
                  <div className="book-quantity-control">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        decrease(livro.id, itemCarrinho.quantidade)
                      }
                    >
                      <img src="/imgs/minus-square.svg" alt="-" />
                    </button>
                    <span className="book-quantity">
                      {itemCarrinho.quantidade}
                    </span>
                    <button
                      className="quantity-button"
                      onClick={() => increase(livro.id)}
                    >
                      <img src="/imgs/plus-square.svg" alt="+" />
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => remove(livro.id)}
                    >
                      <img src="/imgs/trash.svg" alt="-" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total">
            <p>
              Total: <span>R${total.toFixed(2)}</span>
            </p>
            <button className="pay-button" onClick={() => handlePagamento()}>
              Pagar
            </button>
          </div>
        </div>
      ) : (
        <p>
          Nenhum livro foi adicionado ao carrinho ainda.{" "}
          <Link to="/catalogo">Comprar?</Link>
        </p>
      )}
    </>
  );
};
export default Carrinho;
