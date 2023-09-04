import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Perfil(){

    const {setIsLogged} = useContext(UserContext)
    const navigate = useNavigate();

    function handleLogout(){
        setIsLogged(false)
        localStorage.removeItem("tjwt")
        navigate("/login");
    }

    return (
        <>
            <h1>Esse é o perfil</h1>
            <button className="bg-light-green-opacity px-4 py-2 hover:bg-light-green rounded-md transition-all" onClick={handleLogout}>Sair</button>
        </>
    );
}