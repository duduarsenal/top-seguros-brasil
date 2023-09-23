import { useContext, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { AuthLogin } from "../../api/authLogin";
import { UserContext } from "../../context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const [nameValue, setNameValue] = useState("")
    const [passValue, setPassValue] = useState("")

    const [failed, setFailed] = useState({status: false, message: ""}) //Aviso caso tenha algum erro

    const {setIsLogged} = useContext(UserContext);
    const [error, setError] = useOutletContext();

    const handleBtn = (e) => {
        e.preventDefault();

        if (!nameValue || !passValue){
            setFailed({status: false})
            setTimeout(() => {
                setFailed({status: true, color: 'red', message: "Preencha todos os campos"})
            }, 0)
            console.log("Preencha todos os campos")
        } else {
            AuthLogin(nameValue, passValue)
            .then((data) => { 
                setIsLogged(true);
                localStorage.setItem("tjwt", data.tokenJWT);
            })
            .then(() => { 
                setFailed({status: false})
                navigate("/perfil")
            })
            .catch((error) => {
                if (error.error){
                    setFailed({status: false})
                    setTimeout(() => {
                        setFailed({status: true, message: "Usuario ou senha incorretos"})
                    }, 0)
                } else {
                    setError({state: true, message: "Erro na conexão, tente novamente mais tarde"})
                }
            })
        }
    }
    
    return ( 
        <div className="flex items-center justify-center min-h-[calc(100vh-180px)]">
            <form className="flex flex-col justify-between bg-white sm:min-h-[20rem] min-w-[20rem] w-max p-2 sm:p-4 border-2 border-black rounded-lg" onSubmit={handleBtn}>

                <h1 className="text-[1.5rem] font-[600] text-center">Acesse sua conta</h1>

                <div className="w-full flex justify-center -mb-7 h-[1.75rem]">
                    <div className={`h-full ${failed.status ? 'initial' : 'hidden'} flex items-center animate-wiggle bg-red-200 w-max px-2 py-1 font-[500] rounded-md text-red-600 `}>{failed.message}</div>
                </div> 

                <div className="flex flex-col gap[.75rem] py-4 mb-6">
                    
                    <div className="relative flex flex-col justify-between pt-[1rem] px-[.75rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none w-[260px] transition-all focus:border-regular-green" type="text" id="usuario" autoComplete="off" onChange={(e) => setNameValue(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="usuario">Usuario/E-mail</label>
                    </div>

                    <div className="relative flex flex-col justify-between pt-[1rem] px-[.75rem] my-[1rem]">
                        <input className="pt-[.4rem] border-b-2 outline-none w-[260px] transition-all focus:border-regular-green" type="password" id="senha" onChange={(e) => setPassValue(e.target.value)}/>
                        <label className="absolute top-0 left-0 w-max text-[1.15rem] text-center px-[.75rem]" htmlFor="senha">Senha</label>
                    </div>
                    
                    <div className="flex items-center justify-center">Não possui uma conta?&nbsp;
                        <Link to='/cadastro'>
                            <span className="text-regular-green hover:border-b-2 hover:border-dark-green-opacity leading-none transition-all duration-[50ms]">Registre-se</span>
                        </Link>
                    </div>

                </div>

                <button className="w-[70%] h-[2.25rem] text-[1.25rem] text-[whitesmoke] font-[600] bg-dark-green mx-auto rounded-sm transition-all duration-300 outline outline-[3px] outline-dark-green hover:outline-offset-[0.15rem]" id="btn" type="submit">ENTRAR</button>

            </form>
        </div>
     );
}