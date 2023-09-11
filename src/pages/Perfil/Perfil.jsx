import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/getInfos";

export default function Perfil(){
    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile()
        .then((response) => {
            setUser(response)
        })
        .catch((error) => console.log(error))
    }, [])

    const {setIsLogged} = useContext(UserContext)
    const navigate = useNavigate();

    function handleLogout(){
        setIsLogged(false)
        localStorage.removeItem("tjwt")
        navigate("/login");
    }

    return (
        <>
            <h1>Bem vindo {user.name}, {user.username}, {user.email}, {user.role}</h1>
            <button className="bg-light-green-opacity px-4 py-2 hover:bg-light-green rounded-md transition-all" onClick={handleLogout}>Sair</button>
        </>
    );
}