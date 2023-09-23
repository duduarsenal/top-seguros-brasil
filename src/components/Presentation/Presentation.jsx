import { Link } from "react-router-dom";
import ImgMaos from "../../assets/maos.png";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { WavesOpacityPresentation } from "../Shapes/Shapes";

export default function Presentation() {

  const typing = useRef(null);

  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "seu Lar.", "sua Família.", "seu Futuro."
      ],
      typeSpeed: 75,
      backSpeed: 50,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <section className="relative flex items-center justify-center h-max max-w-[1140px] my-12 mx-auto overflow-hidden rounded-lg shadow-[0_0_20px_#048c7330] bg-white">
      <WavesOpacityPresentation />
      <div className="z-10 flex flex-col items-end px-12 gap-8 max-w-[52%] py-12">
        <p className="text-[1.5rem] font-[400]">
          Qualidade e Segurança, seja uma casa ou um apartamento, próprio ou
          alugado. Com nosso seguro residencial você pode proteger <span className="text-regular-green font-[500] px-1" ref={typing}></span>
        </p>
        <Link to="/simulacao" className="bg-light-green rounded-md px-4 py-2 text-[1.15rem] font-[500] outline outline-[3px] outline-light-green hover:outline-offset-[0.15rem] transition-all duration-300">Faça uma Simulação</Link>
      </div>
      <div className="">
        <img src={ImgMaos} className="drop-shadow-[4px_4px_5px_rgba(0,0,0,0.5)] w-[100rem] h-auto hidden lg:block"/>
      </div>
    </section>
  );
}
