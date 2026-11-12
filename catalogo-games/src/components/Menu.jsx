import { NavLink } from 'react-router-dom'

const itens = [
  { rota: '/', texto: 'Início' },
  { rota: '/produtos', texto: 'Jogos' },
  { rota: '/sobre', texto: 'Sobre' },
  { rota: '/contato', texto: 'Contato' },
]

function Menu() {
  return (
    <nav className="menu" aria-label="Navegação principal">
      <ul>
        {itens.map((item) => (
          <li key={item.rota}>
            <NavLink
              to={item.rota}
              end={item.rota === '/'}
              className={({ isActive }) => (isActive ? 'ativo' : '')}
            >
              {item.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
