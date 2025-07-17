import { toast } from "react-toastify";

const notify_new_book = (quantidade) =>
  toast.success(
    "Novo livro adicionado ao carrinho. Quantidade atual:" + quantidade
  );
const notify_error = (mensagem) => toast.error(mensagem);

const Livro = ({ livro, carrinho, setCarrinho }) => {
  const addToCart = () => {
    const indexCarrinho = carrinho.findIndex((item) => item.id === livro.id);
    console.log(indexCarrinho);
    const novoCarrinho = [...carrinho];

    if (indexCarrinho > -1) {
      const nova_quantidade = novoCarrinho[indexCarrinho].quantidade + 1;
      if (nova_quantidade <= livro.quantidade) {
        novoCarrinho[indexCarrinho] = {
          ...novoCarrinho[indexCarrinho],
          quantidade: nova_quantidade,
        };
        notify_new_book(nova_quantidade);
      } else {
        notify_error("Quantidade além do estoque disponível");
      }
    } else {
      if (livro.quantidade === 0) {
        notify_error("Livro esgotado");
      } else {
        novoCarrinho.push({
          id: livro.id,
          quantidade: 1,
        });
        notify_new_book(1);
      }
    }
    setCarrinho(novoCarrinho);
  };

  return (
    <main className="pricipal">
      <div className="pag-livro">
        <h2>{livro.titulo}</h2>
        <div className="livro">
          <img
            src={"/imgs/Capas/" + livro.id + ".jpg"}
            alt={"Capa do livro " + livro.titulo}
          />
          <ul>
            <li>ISBN: {livro.isbn}</li>
            <li>Ano: {livro.ano}</li>
            <li>Páginas: {livro.paginas}</li>
            <li>Preço: R${livro.preco},00</li>
            <li>{livro.quantidade} exemplares em estoque</li>
          </ul>
          <button className="buy-button" onClick={() => addToCart()}>
            <img src="/imgs/shopping-cart.svg" alt="Carrinho" />
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </div>
      <div className="content-container">
        <h2>Conteúdo</h2>
        <p>{livro.descricao}</p>
      </div>
    </main>
  );
};

export default Livro;
