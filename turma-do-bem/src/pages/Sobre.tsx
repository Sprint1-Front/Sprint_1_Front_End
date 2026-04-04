import React from "react";

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-text px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">
            Sobre o Projeto
          </h1>
          <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
            Transformando vidas através do acesso ao tratamento odontológico e
            devolvendo sorrisos com dignidade.
          </p>
        </div>

        {/* Missão */}
        <div className="bg-mantle border border-gray-200 rounded-apple-lg p-10 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-accent">
            Nossa missão
          </h2>
          <p className="text-subtext leading-relaxed">
            Nosso objetivo é conectar voluntários e doadores para oferecer
            atendimento odontológico gratuito a crianças e jovens em situação
            de vulnerabilidade. Acreditamos que um sorriso pode mudar vidas,
            trazendo autoestima, saúde e novas oportunidades.
          </p>
        </div>
    </div>
  </div>
  );
};

export default Sobre;
