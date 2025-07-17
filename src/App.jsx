import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./App.css";

import Livro from "./components/Livro";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import Design from "./components/Design";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import Carrinho from "./components/Carrinho";

import { Route, Routes, useParams } from "react-router-dom";
import Pagamento from "./components/Pagamento";

const LivroRouterHandler = ({ livros, carrinho, setCarrinho }) => {
  const { livroSlug } = useParams();
  const livro = livros.find((l) => l.slug === livroSlug);

  if (!livro) return <NotFound />;
  return <Livro livro={livro} carrinho={carrinho} setCarrinho={setCarrinho} />;
};

const App = () => {
  const [total, setTotal] = useState(0);
  const [livros, setLivros] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const response = await axios.get("/api/todosOsLivros.json");
        setLivros(response.data);
        console.log("Livros carregados!");
      } catch (error) {
        console.error("Erro ao carregar livros: ", error);
        setErro("Falha ao carregar os livros. Tente novamente mais tarde!");
      }
    };
    carregarLivros();
  }, []);

  const mapLivros = useMemo(() => {
    const map = {};
    livros.forEach((livro) => {
      map[livro.id] = livro;
    });
    return map;
  }, [livros]);

  useEffect(() => {
    let aux = 0;
    carrinho.forEach((itemCarrinho) => {
      aux +=
        parseFloat(mapLivros[itemCarrinho.id].preco) * itemCarrinho.quantidade;
    });
    setTotal(aux);
  }, [carrinho, mapLivros]);

  return (
    <>
      <Topo />
      <main className="principal">
        {erro && <p className="erro">{erro}</p>}
        <Routes>
          <Route path="/" element={<Home livros={livros} />} />
          <Route path="/frontend" element={<Frontend livros={livros} />} />
          <Route
            path="/programacao"
            element={<Programacao livros={livros} />}
          />
          <Route path="/design" element={<Design livros={livros} />} />
          <Route
            path="/catalogo"
            element={<Catalogo className="catalogo" livros={livros} />}
          />
          <Route
            path="/carrinho"
            element={
              <Carrinho
                livros={mapLivros}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/carrinho/pagamento"
            element={
              <Pagamento
                total={total}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
              />
            }
          />
          <Route
            path="/livro/:livroSlug"
            element={
              <LivroRouterHandler
                livros={livros}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
              />
            }
          />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Rodape />
    </>
  );
};

export default App;
