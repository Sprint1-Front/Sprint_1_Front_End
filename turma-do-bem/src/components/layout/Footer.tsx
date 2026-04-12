import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-mantle border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna Logo/Missão */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-accent font-bold text-xl mb-4 tracking-tight">
              Turma do Bem <div className="text-text/30">| Digital</div>
            </h2>
            <p className="text-subtext text-sm leading-relaxed max-w-xs">
              A maior rede de voluntariado especializado do mundo. Transformando vidas através do sorriso desde 2002.
            </p>
          </div>

          {/* Links Rápidos - Estilo Apple */}
          <div>
            <h3 className="text-text font-medium text-xs uppercase tracking-widest mb-6">Participar</h3>
            <ul className="space-y-3 text-sm text-subtext">
              <li><Link to="./CadastroAluno" className="hover:text-accent transition-colors">Cadastrar Aluno</Link></li>
              <li><Link to="./SejaVoluntario" className="hover:text-accent transition-colors">Seja um Dentista</Link></li>
              <li><Link to="./Sobre" className="hover:text-accent transition-colors">Saiba como funciona</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-medium text-xs uppercase tracking-widest mb-6">Institucional</h3>
            <ul className="space-y-3 text-sm text-subtext">
              <li><Link to="./Sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="./Projetos" className="hover:text-accent transition-colors">Projetos</Link></li>
              <li><Link to="./Transparencia" className="hover:text-accent transition-colors">Transparência</Link></li>
            </ul>
          </div>

          {/* Contato/Social */}
          <div>
            <h3 className="text-text font-medium text-xs uppercase tracking-widest mb-6">Conecte-se</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-base flex items-center justify-center border border-white/5 hover:border-accent/50 transition-all text-subtext hover:text-accent">
                {/* Ícone Instagram simplificado */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base flex items-center justify-center border border-white/5 hover:border-accent/50 transition-all text-subtext hover:text-accent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-text font-medium text-xs uppercase tracking-widest mb-6">Suporte</h3>
          <ul className="space-y-3 text-sm text-subtext">
            <li><Link to="./Faq" className="hover:text-accent transition-colors">Perguntas Frequentes</Link></li>
            <li><Link to="./Contato" className="hover:text-accent transition-colors">Contato</Link></li>
          </ul>
        </div>
        {/* Linha Final de Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-subtext/60">
          <div className="flex gap-6">
            <p>&copy; {currentYear} Turma do Bem. Todos os direitos reservados.</p>
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
          <p className="flex items-center gap-1">
            Desenvolvido com <div className="text-accent">♥</div> para um mundo com mais sorrisos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;