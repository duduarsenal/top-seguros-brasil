export default function Cadastrar() {
    return ( 
        <div className="min-h-[calc(100vh-220px)] flex items-center justify-center">
            <form className="flex flex-col justify-between bg-white w-max sm:min-h-[20rem] sm:min-w-[20rem] sm:p-4 p-2 border-2 border-black rounded-lg">

                <h1 className="text-[1.5rem] font-[600] text-center">Crie sua Conta</h1>

                {/* <div className="msgWrapper">
                    <div id="msgError"></div>
                    <div id="msgSucess"></div>
                </div> */}

                <div className="sm:min-w-[450px] py-3">
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="nome"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="nome">Nome</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="usuario"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="usuario">Usuário</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="email"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="email">E-mail</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="password" id="password"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="password">Senha</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="password" id="repassword"/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="repassword">Confirmar Senha</label>
                    </div>

                    <span className="block text-center">Ja possui uma conta? Faça seu <a className="text-regular-green font-medium" href="./login">Login</a></span>

                </div>

                <button className="w-[70%] h-[2.25rem] text-[1.25rem] text-[whitesmoke] font-[600] bg-dark-green mx-auto rounded-sm transition-all duration-300 outline outline-[3px] outline-dark-green hover:outline-offset-[0.15rem]" id="btn">
                    Registrar
                </button>

            </form>
        </div>
     );
}
