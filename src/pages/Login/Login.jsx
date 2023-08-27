import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleBtn = () => {
        console.log("navigate works, back to home")
        return navigate("/");
    }
    
    return ( 
        <div className="min-h-[calc(100vh-220px)] flex items-center justify-center">
            <form className="flex flex-col justify-between bg-white sm:min-h-[20rem] min-w-[20rem] w-max p-2 sm:p-4 border-2 border-black rounded-lg">

                <h1 className="text-[1.5rem] font-[600] text-center">Acesse sua conta</h1>
                {/* <div id="msgError"></div> */}
                <div className="flex flex-col gap[.75rem] py-4">
                    
                    <div className="relative flex flex-col justify-between pt-[1rem] px-[.75rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none w-[260px] transition-all focus:border-regular-green" type="text" id="usuario" autocomplete="off"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="usuario">Usuario/E-mail</label>
                    </div>

                    <div className="relative flex flex-col justify-between pt-[1rem] px-[.75rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none w-[260px] transition-all focus:border-regular-green" type="password" id="senha"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="senha">Senha</label>
                    </div>
                    
                    <div className="flex justify-center">
                        <a className="text-regular-green" href="./cadastro">Registre-se</a>
                        {/* <a className="text-black-green" href="./cadastro">Esqueci minha senha</a> */}
                    </div>

                </div>

                <button className="w-[70%] h-[2.25rem] text-[1.25rem] text-[whitesmoke] font-[600] bg-dark-green mx-auto rounded-sm transition-all duration-300 outline outline-[3px] outline-dark-green hover:outline-offset-[0.15rem]" id="btn">ENTRAR</button>

            </form>
        </div>
     );
}