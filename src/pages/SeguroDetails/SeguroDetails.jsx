import { useParams } from "react-router-dom";
import {
  BsFire,
  BsFillBuildingFill,
  BsWind,
  BsPeopleFill,
  BsLightningFill,
  BsShieldFill,
} from "react-icons/bs";

export default function SeguroDetails() {
  const { id } = useParams();

  return (
    <div className="h-max w-full flex items-center justify-between px-4 gap-8">
      <section className="min-h-[calc(100vh-220px)] flex flex-col gap-4 justify-center px-4 py-2">
        <h2 className="text-[1.25rem] text-black-green font-[500] text-center px-32 mx-auto">
          Garanta a Segurança da Sua Casa com o Seguro Residencial contra
          Incêndio, Raio e Explosão!
        </h2>
        <p className="">
          Seu lar é onde memórias nascem e sonhos se concretizam. Mas desastres
          como incêndios, raios e explosões podem arruinar tudo. Apresentamos
          nosso abrangente Seguro Residencial para proporcionar a tranquilidade
          que você merece.
        </p>
        <div className="">
          <p>
            🔥 Incêndio: Proteja seus bens, casa e futuro contra incêndios
            devastadores.
          </p>
          <p>
            ⚡ Raio: Nossa cobertura impede danos causados por raios
            imprevisíveis.
          </p>
          <p>
            💥 Explosão: Acidentes acontecem. Estamos aqui para ajudar na
            reconstrução.
          </p>
        </div>
        <div>
          <span>Garantimos: </span>
          <p>✔ Atendimento 24h.</p>
          <p>✔ Ativação de Sinistro 100% Online.</p>
          <p>✔ Compensação do Sinistro no Pix em até 7d úteis.</p>
          <p>✔ Cancelamento 100% Online com Devolução em até 7d úteis</p>
        </div>
      </section>
      <section className="min-h-[calc(100vh-220px)] min-w-[20rem] bg-slate-100 flex flex-col items-center justify-between px-4 py-2 gap-4">
        <div>
          <BsFire className="text-[10rem] text-regular-green" />
        </div>
        <h1 className="text-[1.2rem] font-[600]">Incêndio, raio e explosão</h1>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col">
            <p className="text-dark-green font-[500]">Cobertura</p>
            <p className="text-black-green font-[300]">
              de R$5.000 até R$2.000.000
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-dark-green font-[500]">Avaliação dos riscos</p>
            <p className="text-black-green font-[300]">Em até 5 dias úteis</p>
          </div>
          <div className="flex flex-col">
            <p className="text-dark-green font-[500]">Cancelamento</p>
            <p className="text-black-green font-[300]">
              Minimo 30 dias após a contratação
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
