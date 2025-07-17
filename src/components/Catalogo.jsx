import React from 'react'
import { Link } from 'react-router-dom'

const Catalogo = ({ livros }) => {
  return (
    <>
      <h2>Todos os livros</h2>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'frontend')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h3>Categoria Design</h3>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'design')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h3>Categoria Programação</h3>
      <ol>
        {livros
          .filter(livro => livro.categoria === 'programacao')
          .map(livro => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
    </>
  )
}

export default Catalogo