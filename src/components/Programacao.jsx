import React from 'react'
import { Link } from 'react-router-dom'

const Programacao = ({ livros }) => {
  return (
    <>
      <h2>Categoria Programação</h2>
      {livros
        .filter((cat) => cat.categoria === 'programacao')
        .map((capa) => (
          <div className="card" key={capa.id}>
            <div className="thumb">
              <img src={"/imgs/Capas/" + capa.id + ".jpg"} alt={"Thumbnail para o livro " + capa.titulo} />
            </div>
            {livros
              .filter((c) => c.slug === capa.slug)
              .map((livro) => (
                <span key={livro.slug}>
                  <Link to={`/livro/${livro.slug}`}>
                    {
                      <div className="detalhes">
                        <h3>{livro.titulo}</h3>
                        <p>{livro.descricao.slice(0, 130) + "..."}</p>
                        <p>Leia mais</p>
                      </div>
                    }
                  </Link>
                </span>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default Programacao