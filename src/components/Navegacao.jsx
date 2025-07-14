import React from 'react'
import { NavLink } from 'react-router-dom';

const Navegacao = () => {

    const linkCorrente = ({isActive}) => ({
        color:isActive ? "#0273a9":"inherit",
        fontWeight:isActive ? "bold":"normal",}
    );
    return (
        <nav aria-label='Navegação principal'>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={linkCorrente}>Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/frontend"
                        style={linkCorrente}>Frontend</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/programacao"
                        style={linkCorrente}>Programação</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/design"
                        style={linkCorrente}>Desing</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/catalogo"
                        style={linkCorrente}>Catálogo</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        style={linkCorrente}>Carrinho</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacao;