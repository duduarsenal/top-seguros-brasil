import SimulacaoBox from "../../components/SimulaçãoBox/SimulacaoBox";

export default function Simulacao() {
  return (
    <div className="min-h-[calc(100vh-220px)] flex flex-col px-8">
      <h1 className="text-[1.5rem] font-[500] text-center py-4">
        Personalize seu plano de seguro com o preço que cabe no seu bolso!
      </h1>
      <div className="w-full items-center justify-center flex flex-wrap gap-8 py-4">
        <SimulacaoBox />
        <SimulacaoBox />
        <SimulacaoBox />
        <SimulacaoBox />
        <SimulacaoBox />
        <SimulacaoBox />
      </div>
    </div>
  );
}
