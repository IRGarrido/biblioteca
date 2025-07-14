import { Link } from 'react-router-dom'

const NotFound = () => {
 
  return(
    <div className="notFound" style={{margin:"0 auto"}}>
      <h1 style={{margin:"2rem 0 .5rem 0"}}>DESCULPE! :(</h1>
      <p>A página requisitada não foi encontrada! Por favor, retorne para a &nbsp;
      <Link to="/">Página Inicial</Link> e tente novamente.</p>
      <img src="https://http.dog/404.jpg" alt="Not Found" style={{height:"70vh", borderRadius:"24px"}}/>
    </div>
  )
}

export default NotFound