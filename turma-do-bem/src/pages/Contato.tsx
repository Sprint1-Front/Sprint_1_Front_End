import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-text px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-subtext text-lg leading-relaxed max-w-2xl mx-auto">
            Estamos aqui para ouvir você! Seja para dúvidas, sugestões ou parcerias, entre em contato conosco.
          </p>
        </div>
        
      </div>
    </div>
    );
};

export default Contato;