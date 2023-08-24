import { Link } from "react-router-dom";
import { BsFire, BsFillBuildingFill, BsWind, BsPeopleFill, BsLightningFill, BsShieldFill } from 'react-icons/bs'

export default function Seguros() {
  const seguros = [
    {
      icon: <BsFire className="text-[3rem]"/>,
      name: 'Incêndio, raio e explosão'
    },
    {
      icon: <BsFillBuildingFill className="text-[3rem]"/>,
      name: 'Perda e pagamento de aluguel'
    },
    {
      icon: <BsWind className="text-[3rem]"/>,
      name: 'Vendaval, granizo e ciclone'
    },
    {
      icon: <BsPeopleFill className="text-[3rem]"/>,
      name: 'Responsabilidade civil familiar'
    },
    {
      icon: <BsLightningFill className="text-[3rem]"/>,
      name: 'Danos elétricos'
    },
    {
      icon: <BsShieldFill className="text-[3rem]"/>,
      name: 'Roubos ou Furtos'
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
          <div className="h-max min-w-[25rem] flex flex-col items-center px-8 py-6 bg-regular-green-opacity rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer" key={index}>
            {seguro.icon}
            <p className="font-[500] text-[1.2rem]">{seguro.name}</p>
          </div>
        ))
      }
      </div>
    </section>
  );
}
