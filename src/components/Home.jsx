import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h2>Últimos lançamentos</h2>
            <div className="card">
                <div className="thumb">
                    <img src="public/imgs/capas/9788575228142.jpg" alt="Padrões para Kubernetes" />
                </div>
                <div className="detalhes">
                    <h3>Padrões para Kubernetes</h3>
                    <p>O modo como os ...</p>
                    <Link to='/livro/padroes-para-kubernetes'>Leia mais</Link>
                </div>
            </div>
            <div className="card">
                <div className="thumb">
                    <img src="public/imgs/capas/9788575228074.jpg" alt="Introdução ao Pentest" />
                </div>
                <div className="detalhes">
                    <h3>Introdução ao Pentest - 2º Edição</h3>
                    <p>Introdução ao Pentest...</p>
                    <Link to='/livro/introducao-ao-pentest'>Leia mais</Link>
                </div>
            </div>
            <div className="card">
                <div className="thumb">
                    <img src="public/imgs/capas/9788575228098.jpg" alt="Construindo Chatbots com Python" />
                </div>
                <div className="detalhes">
                    <h3>Construindo Chatbots com Python</h3>
                    <p>Construa seu próprio chatbot usando Python e ferramentas open source...</p>
                    <Link to='/livro/construindo-chatbots-com-python'>Leia mais</Link>
                </div>
            </div>
        </>
    )
}

export default Home