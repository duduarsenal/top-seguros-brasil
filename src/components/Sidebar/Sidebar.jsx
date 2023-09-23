import { useState } from "react";
import { BsFillCalendarCheckFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdMedicalServices } from 'react-icons/md'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { LuLogOut } from 'react-icons/lu'
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'

export default function Sidebar(props) {

    const [Sidebar, setSidebar] = useState(false);

    function handleSidebar(e){
        // setSidebar(true)
        e.target.id == 'aside' ? setSidebar(true) : '';
    }

    function closeSideBar(){
        setSidebar(Sidebar ? false : true);
    }

    return ( 
        <aside className={`${Sidebar ? 'cursor-auto' : 'cursor-pointer'} rounded-lg w-max fixed top-0 left-0 h-full transition-all duration-[400ms] ease-out bg-regular-green-opacity flex flex-col justify-between pt-[3.5rem] z-0`}>

            <ul className="flex flex-col items-center justify-center w-full overflow-hidden">
                {/* <li className={`${Sidebar ? 'justify-end bg-light-green-opacity' : ''} h-[3rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`}>           
                    <RiMenuUnfoldLine className={`${Sidebar ? 'hidden' : 'block'} text-[1.5rem] transition-all duration-300 min-w-max`}/>
                    <RiMenuFoldLine className={`${Sidebar ? 'block' : 'hidden'} text-[1.5rem] transition-all duration-300 min-w-max`}/>
                </li> */}
                <li className={`${Sidebar ? 'justify-start' : ''} h-[3.5rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`}>
                    <BsFillCalendarCheckFill className={`${Sidebar ? 'text-[1.2rem]' : 'text-[1.5rem]'} transition-all duration-300 min-w-max`}/>
                    <p className={`${Sidebar ? 'block' : ''} min-w-max text-[500] overflow-hidden`}>Finalizar Cadastro</p>
                </li>
                <li className={`${Sidebar ? 'justify-start' : ''} h-[3.5rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`}>
                    <BsFillShieldLockFill className={`${Sidebar ? 'text-[1.2rem]' : 'text-[1.5rem]'} transition-all duration-300 min-w-max`}/>
                    <p className={`${Sidebar ? 'block' : ''} min-w-max text-[500] overflow-hidden`}>Meus seguros</p>
                </li>
                <li className={`${Sidebar ? 'justify-start' : ''} h-[3.5rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`}>
                    <MdMedicalServices className={`${Sidebar ? 'text-[1.2rem]' : 'text-[1.5rem]'} transition-all duration-300 min-w-max`}/>
                    <p className={`${Sidebar ? 'block' : ''} min-w-max text-[500] overflow-hidden`}>Solicitar Serviços</p>
                </li>
                <li className={`${Sidebar ? 'justify-start' : ''} h-[3.5rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`}>
                    <BsFillChatLeftTextFill className={`${Sidebar ? 'text-[1.2rem]' : 'text-[1.5rem]'} transition-all duration-300 min-w-max`}/>
                    <p className={`${Sidebar ? 'block' : ''} min-w-max text-[500] overflow-hidden`}>Chat Funcionario</p>
                </li>
            </ul>
            <div className={`justify-start h-[3.5rem] flex gap-2 items-center w-full hover:bg-light-green-opacity py-4 px-4 cursor-pointer`} onClick={props.logout}>
                <LuLogOut className={`${Sidebar ? 'text-[1.5rem]' : 'text-[1.7rem]'} transition-all duration-300 min-w-max`}/>
                <p className={`${Sidebar ? 'block' : ''} min-w-max text-[500] overflow-hidden`}>Sair</p>
            </div>
        </aside>
     );
}