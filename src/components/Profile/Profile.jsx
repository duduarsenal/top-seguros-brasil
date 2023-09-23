import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getProfile } from "../../api/getInfos";

import { Listbox } from "@headlessui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Profile({handleLogout, user, setUser}) {
    
  const [error, setError] = useOutletContext();

  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    getProfile()
      .then((response) => {
        setUser(response);
        const name = () => { return response.name.split(' ')[0]}
        sessionStorage.setItem("udt", name())
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

  return (
    <div className="ml-[210px] flex-wrap p-4 my-2 gap-8 rounded-lg bg-regular-green-opacity min-h-[calc(100vh-200px)] h-full w-full flex flex-col items-start justify-start">
      <form className="w-full flex justify-center gap-24 flex-wrap">
        <DadosPessoais
          name={user.name}
          email={user.email}
          document={user.document}
          tel={user.tel}
          readOnly={readOnly}
        />
        <Endereco readOnly={readOnly} />
      </form>
      <form className="w-full flex justify-center gap-24 flex-wrap">
        <ChavePIX chavePix={user.chavePix} readOnly={readOnly} />
        <SeusSeguros readOnly={readOnly} />
      </form>
    </div>
  );
}

export function DadosPessoais({ name, document, tel, email, readOnly }) {
  return (
    <section className="flex flex-col w-[45%]">
      <h1 className="text-[1.25rem] font-[500]">Dados Pessoais</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Nome Completo</label>
        <input
          type="text"
          defaultValue={name}
          disabled={readOnly}
          className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem] w-full"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Documento</label>
          <input
            type="text"
            defaultValue={document}
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Telefone</label>
          <input
            type="text"
            defaultValue={tel}
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          defaultValue={email}
          disabled={readOnly}
          className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
        />
      </div>
    </section>
  );
}

export function Endereco({ readOnly }) {
  return (
    <section className="w-[45%]">
      <h1 className="text-[1.25rem] font-[500]">Endereço</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Rua</label>
        <input
          type="text"
          disabled={readOnly}
          className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Número</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Complemento</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Bairro</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">CEP</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Cidade</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Estado</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export function ChavePIX({ chavePix, readOnly }) {
  const pixValues = [
    { value: "email", name: "E-mail" },
    { value: "cpf", name: "Documento" },
    { value: "tel", name: "Telefone" },
    { value: "Random", name: "Aleatório" },
  ];
  const [pixValue, setPixValue] = useState(pixValues[0]);
  const [selectArrow, setSelectArrow] = useState(false);

  function handleSelectArrow() {
    setSelectArrow(!selectArrow);
  }

  return (
    <section className="w-[45%]">
      <h1 className="text-[1.25rem] font-[500]">Chave PIX</h1>
      <div className="flex flex-col w-[50%]">
        <label>Tipo</label>
        <div className="relative w-full h-full">
          <Listbox value={pixValue} onChange={setPixValue} disabled={readOnly}>
            <Listbox.Button
              className="flex w-full h-full bg-regular-green-opacity border-2 border-regular-green-opacity border-gray-500 rounded-sm"
              onClick={handleSelectArrow}
            >
              <p className="w-full h-full flex items-center justify-start px-1">
                {readOnly && chavePix?.chaveTipo
                  ? chavePix?.chaveTipo
                  : pixValue.name}
              </p>
              <MdKeyboardArrowDown
                className={`${
                  selectArrow ? "hidden" : "block"
                } absolute top-0 right-0 text-[2rem]`}
              />
              <MdKeyboardArrowUp
                className={`${
                  selectArrow ? "block" : "hidden"
                } absolute top-0 right-0 text-[2rem]`}
              />
            </Listbox.Button>
            <Listbox.Options className="absolute top-0 mt-7 bg-white rounded-bl-sm rounded-br-sm w-full cursor-pointer">
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
      <div className="w-full flex flex-col">
        <label htmlFor="">Chave</label>
        <input
          type="text"
          defaultValue={chavePix?.chaveValue}
          disabled={readOnly}
          className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
        />
      </div>
    </section>
  );
}

export function SeusSeguros({ readOnly }) {
  return (
    <section className="w-[45%]">
      <h1 className="text-[1.25rem] font-[500]">Meus Seguros</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Tipo de Seguro</label>
        <input
          type="text"
          disabled={readOnly}
          className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Cobertura</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Mensalidade</label>
          <input
            type="text"
            disabled={readOnly}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
