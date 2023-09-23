import { Link, useSearchParams } from "react-router-dom";
import { BsFire, BsFillBuildingFill, BsWind, BsPeopleFill, BsLightningFill, BsShieldFill } from 'react-icons/bs'
import { useEffect } from "react";

export default function Seguros() {
  // const useSearch = useSearchParams();
  // useEffect(() => {
  //   console.log(useSearch)
  // },[])

  const seguros = [
    {
      icon: <BsFire className="text-[3rem]"/>,
      name: 'Incêndio, raio e explosão',
      id: 'ire'
    },
    {
      icon: <BsFillBuildingFill className="text-[3rem]"/>,
      name: 'Perda e pagamento de aluguel',
      id: 'ppa'
    },
    {
      icon: <BsWind className="text-[3rem]"/>,
      name: 'Vendaval, granizo e ciclone',
      id: 'vgc'
    },
    {
      icon: <BsPeopleFill className="text-[3rem]"/>,
      name: 'Responsabilidade civil familiar',
      id: 'rcf'
    },
    {
      icon: <BsLightningFill className="text-[3rem]"/>,
      name: 'Danos elétricos',
      id: 'de'
    },
    {
      icon: <BsShieldFill className="text-[3rem]"/>,
      name: 'Roubos ou Furtos',
      id: 'rf'
    },
  ]
  return (
    <section className="flex flex-col px-8">
      <h1 className="font-[600] text-[2rem]">Serviços presentes no seguro</h1>
      {/* <p>
        <Link to="/seguros/1">Simulação 1</Link>
      </p>
      <p>
        <Link to="/seguros/2">Simulação 2</Link>
      </p>
      <p>
        <Link to="/seguros/3">Simulação 3</Link>
      </p> */}
      <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-12 py-4">
      {
        seguros.map((seguro, index) => (
          <div className="relative hoverSecures min-h-[8rem] h-max min-w-[25rem] flex flex-col items-center justify-center px-8 py-6 bg-regular-green-opacity rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer" key={index}>
            {seguro.icon}
            <p className="font-[500] text-[1.2rem]">{seguro.name}</p>
            <div className="moreSecure absolute top-0 right-0 h-max w-full flex justify-end font-[500] text-dark-green opacity-0 transition-all duration-300">
              <Link to={`seguros/${seguro.id}`} className="bg-regular-green-opacity px-4 py-1 mr-2 mt-0 rounded-lg hover:bg-light-green-opacity">Saiba Mais</Link>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
}
