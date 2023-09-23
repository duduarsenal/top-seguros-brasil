import { Link } from "react-router-dom";
import Logo from '../../assets/favicon.png'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FaUserCircle } from 'react-icons/fa';

export default function Header(props) {

    const {isLogged, user} = useContext(UserContext)
    const [verPerfil, setVerPerfil] = useState(false)
    const udt = sessionStorage.getItem('udt'); 

    function handleVerPerfil(){
        setVerPerfil(!verPerfil)
    }

    return ( 
        <nav className={`flex justify-between h-[3.25rem] px-4 z-10 bg-white`}>
            <div className="flex gap-4 items-center">
                <img src={Logo} alt="Logo TSB" className="w-[3rem] h-max"/>
                <p className="font-[600] text-black-green text-[1.5rem]">Top Seguros Brasil</p>
            </div>
            <ul className="flex items-center justify-evenly gap-4 text-dark-green font-[500] text-[1.2rem]">
                <li className="h-full"><Link to="/" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Inicio</Link></li>
                {/* <li className="h-full"><Link to="/" className="w-max h-full flex items-center px-6 hover:bg-light-green-opacity">Nossos Seguros</Link></li> */}
                <li className="h-full"><Link to="/simulacao" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Simulação</Link></li>
                <li className={`${!isLogged ? 'flex' : 'hidden'} h-full`}><Link to="/login" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Login</Link></li>
                <li className={`${!isLogged ? 'flex' : 'hidden'} h-full`}><Link to="/cadastro" className="h-full flex items-center px-6 hover:bg-light-green-opacity">Cadastrar</Link></li>
                <li className={`${isLogged ? 'flex' : 'hidden'} h-full`} onMouseEnter={handleVerPerfil} onMouseLeave={handleVerPerfil}>
                    <Link to="/perfil" className="h-full flex flex-row-reverse gap-2 items-center px-6 hover:bg-light-green-opacity">
                        <FaUserCircle className="text-[1.75rem]"/>
                        <div>                        
                            <p className="leading-none">{udt ? udt : ''}</p>
                            <p className={`${verPerfil ? 'opacity-100 mb-0' : 'opacity-0 -mb-[15px]'} font-[400] text-[0.9rem] leading-none transition-all duration-300`}>Abrir perfil</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}