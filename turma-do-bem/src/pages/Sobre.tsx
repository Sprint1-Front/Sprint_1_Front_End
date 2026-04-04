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
    </div>
  </div>
  );
};

export default Sobre;
