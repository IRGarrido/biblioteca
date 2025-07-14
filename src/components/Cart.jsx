import React, { useEffect, useMemo, useState } from 'react'

const Cart = ({livros, carrinho, setCarrinho}) => {
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
        carrinho.map((livro) => {
            aux = aux + parseFloat(mapLivros[livro].preco);
        })
        setTotal(aux);
    },[carrinho, livros])

    const remove = (id) => {
        setCarrinho(prevCarrinho => {
            const indexToRemove = prevCarrinho.indexOf(id);

            if(indexToRemove > -1) {
                const newCarrinho = [...prevCarrinho];
                newCarrinho.splice(indexToRemove,1);
                return newCarrinho;
            }

            return prevCarrinho;
        }
        );
    };

    return (
    <>
        <h2>Livros adicionados</h2>
        <div className="carrinho-compras">
            {carrinho.map(livro => {
                return(
                    <div className="carrinho">
                    <div className="thumb">
                        <img src={"/imgs/Capas/" + livro + ".jpg"} alt={"Thumbnail para o livro"} />
                    </div>
                    {
                        <div className="item">
                        <h3 className="titulo">{mapLivros[livro].titulo}</h3>
                        <p className="preco">{mapLivros[livro].preco}</p>
                        <button onClick={() => remove(livro)}>Remover</button>
                    </div>
                    }
                </div>
            )})}
            <div className="total">
                <p>Total --- R$<span>{total.toFixed(2)}</span></p>
            </div>
        </div>
    </>
    )}
export default Cart