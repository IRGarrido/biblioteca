import React, { useEffect, useMemo, useState } from 'react'

const Carrinho = ({ livros, carrinho, setCarrinho }) => {
    const [total, setTotal] = useState(0);

    const mapLivros = useMemo(() => {
        const map = {};
        livros.forEach(livro => {
            map[livro.id] = livro;
        });
        return map;
    }, [livros]);

    useEffect(() => {
        let aux = 0;
        carrinho.map((itemCarrinho) => {
            aux += parseFloat(mapLivros[itemCarrinho.id].preco) * itemCarrinho.quantidade;
        })
        setTotal(aux);
    }, [carrinho, mapLivros])

    const remove = (id) => {
        setCarrinho(prevCarrinho => {
            const newCarrinho = prevCarrinho.filter(item => item.id !== id);
            return newCarrinho;
        })
    };

    const increase = (id) => {
        setCarrinho(prevCarrinho => {
            return prevCarrinho.map(item =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            );
        });
    };

    const decrease = (id) => {
        setCarrinho(prevCarrinho => {
            return prevCarrinho.map(item => {
                if (item.id === id) {
                    if (item.quantidade === 1) {
                        return null;
                    }
                    return { ...item, quantidade: item.quantidade - 1 };
                }
                return item;
            }).filter(Boolean);
        });
    };

    return (
        <>
            <h2>Livros adicionados</h2>
            <div className="carrinho-compras">
                {carrinho.map(itemCarrinho => {
                    const livro = mapLivros[itemCarrinho.id];
                    if (!livro) return null;

                    return (
                        <div className="carrinho" key={livro.id}>
                            <div className="thumb">
                                <img src={"/imgs/Capas/" + livro.id + ".jpg"} alt={"Thumbnail para o livro"} />
                            </div>
                            <div className="item">
                                <h3 className="titulo">{livro.titulo}</h3>
                                <p className="preco"> R$ {(itemCarrinho.quantidade === 1) ? livro.preco + ',00' : livro.preco + ',00' + ' x ' + itemCarrinho.quantidade + ' = R$' + (parseFloat(livro.preco) * itemCarrinho.quantidade) + ',00'}</p>
                                <div className='book-quantity-control'>
                                    <button className='quantity-button' onClick={() => decrease(livro.id)}><img src='/imgs/minus-square.svg' alt='-' /></button>
                                    <span className='book-quantity'>{itemCarrinho.quantidade}</span>
                                    <button className='quantity-button' onClick={() => increase(livro.id)}><img src='/imgs/plus-square.svg' alt='+' /></button>
                                    <button className='remove-button' onClick={() => remove(livro.id)}><img src='/imgs/trash.svg' alt='-' /></button>
                                </div>
                            </div>

                        </div>
                    )
                })}
                <div className="total">
                    <p>Total: <span>R${total.toFixed(2)}</span></p>
                    <button className='pay-button'>Pagar</button>
                </div>
            </div >
        </>
    )
}
export default Carrinho