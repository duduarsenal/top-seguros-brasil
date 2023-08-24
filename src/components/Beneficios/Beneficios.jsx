import { BsPhoneVibrate, BsFillClipboard2CheckFill } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";

export default function Beneficios() {
  const beneficios = [
    {
      icon: <BsPhoneVibrate className="text-[3rem]" />,
      name: "100% Digital",
      desc: "Acionar ou Personalizar o seguro de forma simples e rápida pelos seu dispositivo eletronico.",
    },
    {
      icon: <GrSchedules className="text-[3rem]" />,
      name: "Assinatura mensal ou anual",
      desc: "No plano anual, há um desconto de 20%, e no plano mensal, é possível cancelar a assinatura a qualquer momenta sem multa.",
    },
    {
      icon: <BsFillClipboard2CheckFill className="text-[3rem]" />,
      name: "Personalizar seu Plano",
      desc: "Você pode escolher o valor de cada cobertura ou comprar um plano preparado pela nossa equipe.",
    },
  ];

  return (
    <section className="flex flex-col px-8">
      <h1 className="font-[600] text-[2rem]">Principais Beneficios</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {beneficios.map((beneficio, index) => (
          <div className="flex flex-col w-[26rem] gap-1 text-center p-4 bg-light-green-opacity items-center rounded-xl" key={index}>
            {beneficio.icon}
            <h3 className="font-[600] text-[1.15rem]">{beneficio.name}</h3>
            <p>{beneficio.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
