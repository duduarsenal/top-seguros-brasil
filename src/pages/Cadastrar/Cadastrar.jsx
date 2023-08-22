export default function Cadastrar() {
    return ( 
        <div className="min-h-[calc(100vh-220px)] flex items-center justify-center">
            <form className="flex flex-col justify-between bg-[white] w-max sm:min-h-[20rem] sm:min-w-[20rem] sm:p-4 p-4 border-2 border-black rounded-[.5rem]">

                <h1 className="w-full text-[1.5rem] font-[600] text-center">CRIE SUA CONTA</h1>

                {/* <div className="msgWrapper">
                    <div id="msgError"></div>
                    <div id="msgSucess"></div>
                </div> */}

                <div className="mb-[2.25rem]">
                    <div className="relative flex flex-col justify-between sm:min-w-[450px] pt-[1rem] my-[1rem] mx-auto">
                        <input className="w-auto pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none min-w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]" type="text" />
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center pointer-events-none" htmlFor="nome" id="labelNome">Nome</label>
                    </div>

                    <div className="relative flex flex-col justify-between sm:min-w-[450px] pt-[1rem] my-[1rem] mx-auto">
                        <input className="w-auto pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none min-w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]" type="text"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center pointer-events-none" htmlFor="username" id="labelUsername">Usuário</label>
                    </div>

                    <div className="relative flex flex-col justify-between sm:min-w-[450px] pt-[1rem] my-[1rem] mx-auto">
                        <input className="w-auto pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none min-w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center pointer-events-none" htmlFor="email" id="labelEmail">E-mail</label>
                    </div>

                    <div className="relative flex flex-col justify-between sm:min-w-[450px] pt-[1rem] my-[1rem] mx-auto">
                        <input className="w-auto pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none min-w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center pointer-events-none" htmlFor="password" id="labelSenha">Senha</label>
                    </div>
                    
                    <div className="relative flex flex-col justify-between sm:min-w-[450px] pt-[1rem] my-[1rem] mx-auto">
                        <input className="w-auto pt-[.3rem] pr-[.3rem] pb-0 pl-[1px] inline-block border-b-2 border-b-[#1f1f1f] bg-transparent outline-none min-w-[260px] text-[1rem] transition-all duration-300 focus:border-[#ff969680]"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center pointer-events-none" htmlFor="repassword" id="labelConfirmSenha">Confirmar Senha</label>
                    </div>

                    <span className="block text-center">Ja possui uma conta? Faça seu <a className="text-[red] font-[500]" href="./login">Login</a></span>

                </div>

                <button className="cursor-pointer w-[70%] h-[2.25rem] text-[1.25rem] uppercase font-[600] bg-[#ff2323] mx-auto rounded-[0.25rem] transition-all duration-300 ease-in-out outline outline-[3px] outline-[#ff2323] hover:outline-offset-[0.15rem]" id="btn">
                    Registrar
                </button>

            </form>
        </div>
     );
}
