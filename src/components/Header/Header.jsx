import { Link } from "react-router-dom";
import Logo from '../../assets/favicon.png'

export default function Header() {
    return ( 
        <nav className="flex justify-between h-[3.25rem] px-4">
            <div className="flex gap-4 items-center">
                <img src={Logo} alt="Logo TSB" className="w-[3rem] h-max"/>
                <p className="font-[600] text-black-green text-[1.5rem]">Top Seguros Brasil</p>
            </div>
            <ul className="flex items-center justify-evenly gap-4 text-dark-green font-[500] text-[1.2rem]">
                <li className="h-full"><Link to="/" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Inicio</Link></li>
                {/* <li className="h-full"><Link to="/" className="w-max h-full flex items-center px-6 hover:bg-light-green-opacity">Nossos Seguros</Link></li> */}
                <li className="h-full"><Link to="/simulacao" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Simulação</Link></li>
                <li className="h-full"><Link to="/login" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Login</Link></li>
                <li className="h-full"><Link to="/cadastro" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Cadastrar</Link></li>
            </ul>
        </nav>
     );
}