import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getProfile } from "../../api/getInfos";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Listbox } from "@headlessui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export default function Perfil() {
  const [user, setUser] = useState({});
  const { setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const [error, setError] = useOutletContext();

  useEffect(() => {
    getProfile()
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
        setError({
          state: true,
          message: "Erro na conexão, tente novamente mais tarde",
        });
        handleLogout();
      });
  }, []);

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("tjwt");
    navigate("/login");
  }

  return (
    <div>
      <Sidebar logout={handleLogout} />
      {/* <h1 className="w-full flex justify-center text-[1.5rem] font-[600]">
        Gerencie seu perfil, {user.username}
      </h1> */}
      <form className="gap-2 flex justify-evenly">
        <DadosPessoais
          name={user.name}
          username={user.username}
          email={user.email}
        />
        <Endereco />
      </form>
      {/* <button className="bg-light-green-opacity px-4 py-2 hover:bg-light-green rounded-md transition-all" onClick={handleLogout}>Sair</button> */}
    </div>
  );
}

export function DadosPessoais({ name, username, email, chavePix }) {
  const pixValues = [
    {
      value: "email",
      name: "E-mail",
    },
    {
      value: "cpf",
      name: "Documento",
    },
    {
      value: "tel",
      name: "Telefone",
    },
    {
      value: "Random",
      name: "Aleatório",
    },
  ];
  const [pixValue, setPixValue] = useState(pixValues[0]);
  const [selectArrow, setSelectArrow] = useState(false);

  function handleSelectArrow(){
    setSelectArrow(!selectArrow)
  }

  return (
    <section>
      <h1 className="text-[1.25rem] font-[500]">Dados Pessoais</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Nome Completo</label>
        <input
          type="text"
          defaultValue={name}
          className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm w-full"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Documento</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Telefone</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          defaultValue={email}
          className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
        />
      </div>
      <section>
        <h1 className="text-[1.25rem] font-[500]">Chave PIX</h1>
        <div className="flex justify-between">
          <div className="w-[32%] flex flex-col">
            <label htmlFor="">Tipo</label>
            <div className="relative w-full h-full">
              <Listbox value={pixValue} onChange={setPixValue}>
                <Listbox.Button className="flex w-full h-full bg-dark-green-opacity border-gray-500 rounded-sm" onClick={handleSelectArrow}>
                  <p className="w-full h-full flex items-center justify-start px-1">{pixValue.name}</p>
                  <MdKeyboardArrowDown className={`${selectArrow ? 'hidden' : 'block'} absolute top-0 right-0 text-[2rem] pt-[2px] pr-[2px]`}/>
                  <MdKeyboardArrowUp className={`${selectArrow ? 'block' : 'hidden'} absolute top-0 right-0 text-[2rem] pt-[2px] pr-[2px]`}/>
                </Listbox.Button>
                <Listbox.Options className="absolute top-0 mt-8 bg-white rounded-bl-sm rounded-br-sm w-full">
                  {pixValues.map((item, index) => (
                    <Listbox.Option 
                    key={index} 
                    value={item} 
                    className="hover:bg-light-green-opacity px-1 py-1"
                    onClick={handleSelectArrow}
                    >
                      {item.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          <div className="w-[58%] flex flex-col">
            <label htmlFor="">Chave</label>
            <input
              type="text"
              defaultValue={chavePix ? chavePix : email}
              className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export function Endereco() {
  return (
    <section>
      <h1 className="text-[1.25rem] font-[500]">Endereço</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Rua</label>
        <input
          type="text"
          className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Número</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Complemento</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Bairro</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">CEP</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Cidade</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Estado</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-dark-green-opacity rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
