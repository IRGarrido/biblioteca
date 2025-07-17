import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className="not-found">
      <h1>DESCULPE! :(</h1>
      <p>A página requisitada não foi encontrada! Por favor, retorne para a &nbsp;
        <Link to="/">Página Inicial</Link> e tente novamente.</p>
      <img src="https://http.dog/404.jpg" alt="Not Found" />
    </div>
  )
}

export default NotFound