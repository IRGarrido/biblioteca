import React from 'react'

const Livro = ({ livro, setCarrinho }) => {
    const addToCart = () => {
        setCarrinho(prevCarrinho => {
            const livroExistente = prevCarrinho.find(item => item.id === livro.id);

            if (livroExistente) {
                return prevCarrinho.map(item =>
                    item.id === livro.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                return [...prevCarrinho, { id: livro.id, quantidade: 1 }];
            }
        });
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
                    </ul>
                    <button className='buy-button' onClick={addToCart}>
                        <img src="/imgs/shopping-cart.svg" alt="Carrinho" />Adicionar ao carrinho</button>
                </div>
            </div>
            <div className="content-container">
                <h2>Conteúdo</h2>
                <p>{livro.descricao}</p>
            </div>
        </main>
    )
}

export default Livro