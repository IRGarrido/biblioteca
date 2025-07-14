import React from 'react'

const Livro = ({livro, carrinho, setCarrinho}) => {
    const addToCart = () => {
        setCarrinho(carrinho.push(livro.id))
        console.log(carrinho);
    }

    return(
    <main className="pricipal">
        <div className="pag-livro">
            <h2>{livro.titulo}</h2>
            <div className="livro">
                <img 
                    src={"/imgs/Capas/"+ livro.id + ".jpg"} 
                    alt={"Capa do livro " + livro.titulo} 
                />
            <ul>
                <li>ISBN: {livro.isbn}</li>
                <li>Ano: {livro.ano}</li>
                <li>Páginas: {livro.paginas}</li>
                <li>Preço: R${livro.preco},00</li>
            </ul>         
            <button onClick={addToCart}>Adicionar ao carrinho</button>           
            </div>
        </div>
        <div className="content-container">
            <h2>Conteúdo</h2>
            <p>{livro.descricao}</p>
        </div>
    </main>
  )}

export default Livro