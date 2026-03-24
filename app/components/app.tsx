import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="tracking-tight">Turma do Bem</div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
          <button className="bg-[#FF6B35] text-white px-6 py-2 rounded-full hover:bg-[#FF5722] transition-colors">
            Doar agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Criança sorrindo segurando escova de dentes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 tracking-tight">Um sorriso muda vidas</h1>
            <p className="text-white/90 mb-8 max-w-xl">
              Conectamos pessoas a tratamento odontológico gratuito e devolvemos autoestima através do voluntariado.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-[#FF5722] transition-all shadow-lg hover:shadow-xl">
                Quero doar
              </button>
              <button className="bg-white text-foreground px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
                Ser voluntário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[#FF6B35] mb-2">+50.000</div>
              <p className="text-muted-foreground">Sorrisos transformados</p>
            </div>
            <div>
              <div className="text-[#FF6B35] mb-2">+8.000</div>
              <p className="text-muted-foreground">Dentistas voluntários</p>
            </div>
            <div>
              <div className="text-[#FF6B35] mb-2">Todo Brasil</div>
              <p className="text-muted-foreground">Atendemos em todas as regiões</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="mb-4">Como você pode participar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Existem diferentes formas de fazer parte dessa corrente do bem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Doar */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545311630-51ea4a4c84de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Pessoas sorrindo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-4">Doar</h3>
              <p className="text-muted-foreground mb-4">
                Com sua contribuição, conseguimos financiar tratamentos odontológicos completos para pessoas em situação de vulnerabilidade.
              </p>
              <p className="text-muted-foreground mb-6">
                Qualquer valor já faz diferença na vida de alguém.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#FF6B35] hover:gap-3 transition-all">
                Quero doar <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 - Voluntariado */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653508311259-692e4ddadaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Voluntária atendendo criança"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-4">Voluntariado</h3>
              <p className="text-muted-foreground mb-4">
                Dentistas e profissionais da área podem se voluntariar para transformar vidas através do seu conhecimento.
              </p>
              <p className="text-muted-foreground mb-6">
                Faça parte de uma rede que impacta milhares de pessoas.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#FF6B35] hover:gap-3 transition-all">
                Ser voluntário <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 - Atendimento */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770134223774-13b735e29201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Profissional de saúde sorrindo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-4">Atendimento</h3>
              <p className="text-muted-foreground mb-4">
                Jovens e mulheres podem se cadastrar para receber tratamento odontológico gratuito e acompanhamento profissional.
              </p>
              <p className="text-muted-foreground mb-6">
                Nosso objetivo é devolver autoestima e qualidade de vida.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#FF6B35] hover:gap-3 transition-all">
                Solicitar atendimento <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="mb-6 text-white">Faça parte dessa transformação</h2>
          <p className="mb-8 text-white/90 max-w-2xl mx-auto">
            Cada sorriso transformado é uma história de esperança. Junte-se a nós nessa missão.
          </p>
          <button className="bg-white text-foreground px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl">
            Começar agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4">Turma do Bem</div>
              <p className="text-white/60">
                Transformando vidas através de sorrisos desde 2005
              </p>
            </div>
            <div>
              <h4 className="mb-4">Sobre</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Nossa história</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparência</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Participe</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Doar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Voluntariado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parcerias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contato</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Fale conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Redes sociais</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2025 Turma do Bem - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}