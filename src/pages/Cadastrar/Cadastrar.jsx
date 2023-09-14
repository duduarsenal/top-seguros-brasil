import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CreateUser } from "../../api/createUser";

export default function Cadastrar() {
    const navigate = useNavigate();

    const [failed, setFailed] = useState({status: false, message: ""}) //Aviso caso tenha algum erro
    const [sucess, setSucess] = useState({status: false, message: ""})
    
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [repass, setRepass] = useState("")

    const [warn, setWarn] = useState(false) //Aviso caso as senhas não sejam iguais

    const [error, setError] = useOutletContext();
    
    const handleBtn = (e) => { 
        e.preventDefault();

        if (!name || !username || !email || !pass || !repass){
            setSucess({status: false})
            setFailed({status: false})
            setTimeout(() => {
                setFailed({status: true, color: 'red', message: "Preencha todos os campos"})
            }, 0)
            console.log("Preencha todos os campos")
        } else if (warn){
            setWarn(false)
            setTimeout(() => {
                setWarn(true)
            }, 0)
            console.log("Senhas não coincidem")
        } else { 
            CreateUser(name, username, email, pass)
            .then((data) => {
                setFailed({status: false})
                setSucess({status: true, color: 'green', message: "Registro feito com sucesso, redirecionando..."})
                console.log(data);
                setTimeout(() => {
                    navigate("/login")
                }, 1500)
            })
            .catch((error) => {
                console.log(error)
                setFailed({status: false})
                setSucess({status: false})
                setError({state: true, message: "Erro na conexão, tente novamente mais tarde"})
            });
        }
    }

    return ( 
        <div className="flex items-center justify-center">
            <form className="flex flex-col justify-between bg-white w-max sm:min-h-[20rem] sm:min-w-[20rem] sm:p-4 p-2 border-2 border-black rounded-lg gap-2" onSubmit={handleBtn}>

                <h1 className="text-[1.5rem] font-[600] text-center">Crie sua Conta</h1>

                <div className="relative w-full flex justify-center -mb-9 -mt-3 h-[2rem]">
                    <div className={`absolute h-full ${failed.status ? 'initial' : 'hidden'} flex items-center animate-wiggle bg-red-200 w-max px-2 py-2 font-[500] rounded-md text-red-600 `}>{failed.message}</div>
                    <div className={`absolute h-full ${sucess.status ? 'initial' : 'hidden'} flex items-center animate-wiggle bg-green-200 w-max px-2 py-2 font-[500] rounded-md text-green-700 `}>{sucess.message}</div>
                </div> 

                <div className="sm:min-w-[450px] py-3">
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="nome" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="nome">Nome</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="usuario" autoComplete="off" onChange={(e) => setUsername(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="usuario">Usuário</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="text" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="email">E-mail</label>
                    </div>
                    <div className="relative flex flex-col justify-between pt-[1rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="password" id="password" 
                        onBlur={(e) => e.target.value == repass ? setWarn(false) : setWarn(true)} onChange={(e) => setPass(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="password">Senha</label>
                    </div>
                    

                    <div className="relative flex flex-col justify-between pt-[1rem] pb-[.5rem] my-[1.5rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none transition-all focus:border-regular-green" type="password" id="repassword" onBlur={(e) => e.target.value == pass ? setWarn(false) : setWarn(true)} onChange={(e) => setRepass(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center" htmlFor="repassword">Confirmar Senha</label>
                    </div>
                    <p className={`${warn ? 'flex' : 'hidden'} animate-wiggle bg-red-200 w-max px-2 rounded-md text-red-600 -mt-[1.5rem]`}>
                        As senhas não coincidem
                    </p>

                    <span className="block text-center">Ja possui uma conta? Faça seu <a className="text-regular-green font-medium" href="./login">Login</a></span>

                </div>

                <button className="w-[70%] h-[2.25rem] text-[1.25rem] text-[whitesmoke] font-[600] bg-dark-green mx-auto rounded-sm transition-all duration-300 outline outline-[3px] outline-dark-green hover:outline-offset-[0.15rem]" id="btn">
                    Registrar
                </button>

            </form>
        </div>
     );
}
