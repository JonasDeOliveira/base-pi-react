import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Produto</Link></li>
                <li><Link to="/cart">Carrinho</Link></li>
            </ul>
        </>
    )
}

export default Header