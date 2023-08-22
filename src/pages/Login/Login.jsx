import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleBtn = () => {
        console.log("navigate works, back to home")
        return navigate("/");
    }
    
    return ( 
        <div className="min-h-[calc(100vh-220px)] flex items-center justify-center">
            <form className="flex flex-col justify-between bg-[white] sm:min-h-[20rem] sm:min-w-[20rem] w-max p-2 sm:p-4 border-2 border-black rounded-[.5rem]">

                <h1 className="w-full text-[1.5rem] font-[600] text-center pb-4">Acesse sua conta</h1>
                {/* <div id="msgError"></div> */}
                <div className="flex flex-col h-max gap[.75rem] pt-[1rem] pb-[2.5rem] mt-[-2rem]">
                    <div className="relative flex flex-col justify-between w-full pt-[1rem] px-[.75rem] my-[1rem] mx-auto">
                        <input className="pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]" type="text"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="usuario">Usuario/E-mail</label>
                    </div>
                    <div className="relative flex flex-col justify-between w-full pt-[1rem] px-[.75rem] my-[1rem] mx-auto">
                        <input className="pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]" type="text"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="senha">Senha</label>
                    </div>
                    
                    <div className="flex justify-between">
                        <a className="no-underline text-[red] font-[400]" href="./cadastro">Registre-se</a>
                        <a className="no-underline text-[red] font-[400]" href="./cadastro">Esqueci minha senha</a>
                    </div>

                </div>

                <button className="cursor-pointer w-[70%] h-[2.25rem] text-[1.25rem] uppercase font-[600] bg-[#ff2323] mx-auto rounded-[0.25rem] transition-all duration-300 ease-in-out outline outline-[3px] outline-[#ff2323] hover:outline-offset-[0.15rem]" id="btn">Entrar</button>

            </form>
        </div>
     );
}