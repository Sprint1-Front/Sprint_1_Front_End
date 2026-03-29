import "./App.css";

function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="main-header">
        <div className="top-bar">
          <button className="menu-toggle">☰</button>

          <div className="logo">
            <h1 className="logo-text">Turma do Bem</h1>
          </div>

          <div className="header-actions-left">
            <a href="#" className="btn-doar">DOAR</a>
            <a href="/voluntario" className="btn-voluntario">
              SEJA VOLUNTÁRIO
            </a>
          </div>
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="dropdown">
              <a href="#">Nossos Programas</a>
              <ul className="dropdown-menu">
                <li><a href="#">Dentista do Bem</a></li>
                <li><a href="#">Apolônias do Bem</a></li>
                <li><a href="#">Estudantes do Bem</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="/voluntario">Voluntariado</a>
              <ul className="dropdown-menu">
                <li><a href="/voluntario">Benefícios</a></li>
                <li><a href="/voluntario">Adicionar</a></li>
              </ul>
            </li>

            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/integrantes">Integrantes</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section className="hero-banner">
          <article>
            <img
              src="/assets/img/turma-do-bem-hero.jpg"
              alt="Criança sorrindo"
              style={{ width: "100%", display: "block" }}
            />

            <div className="hero-content">
              <h2>Um Sorriso Pode Mudar Tudo</h2>
              <p>
                Conheça os projetos que levam saúde bucal para milhares de
                crianças e jovens no Brasil.
              </p>
            </div>
          </article>
        </section>

        {/* SOBRE */}
        <section className="about-us">
          <div className="container">
            <h2>Transformando Sorrisos, Mudando Vidas</h2>
            <p>
              A Turma do Bem é a maior rede de voluntariado especializado do
              mundo. Através do engajamento de cirurgiões-dentistas voluntários,
              oferecemos tratamento odontológico gratuito e integral para jovens
              de baixa renda e mulheres vítimas de violência.
            </p>
          </div>
        </section>

        {/* PROGRAMAS */}
        <section className="our-programs">
          <div className="container">
            <h2>Nossos Programas em Destaque</h2>

            <div className="programs-grid">
              <article className="program-card">
                <img
                  src="/assets/img/dentista-do-bem.webp"
                  alt="Dentista atendendo criança"
                />
                <h3>Dentista do Bem</h3>
                <p>
                  Programa que oferece tratamento odontológico gratuito para
                  jovens de 11 a 17 anos.
                </p>
                <a href="/sobre" className="btn-learn-more">
                  Saiba Mais
                </a>
              </article>

              <article className="program-card">
                <img
                  src="/assets/img/estudantes-do-bem.webp"
                  alt="Jovens estudantes sorrindo"
                />
                <h3>Estudantes do Bem</h3>
                <p>
                  Projeto para universitários de Odontologia focado em
                  voluntariado.
                </p>
                <a href="#" className="btn-learn-more">
                  Saiba Mais
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section className="impact-stats">
          <div className="container">
            <h2>Nosso Impacto em Números</h2>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">+84.000</span>
                <p>Jovens e Mulheres Atendidos</p>
              </div>

              <div className="stat-item">
                <span className="stat-number">+17.000</span>
                <p>Dentistas Voluntários</p>
              </div>

              <div className="stat-item">
                <span className="stat-number">12</span>
                <p>Países da América Latina e Portugal</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Faça Parte Desta Corrente do Bem</h2>
            <p>
              Sua ajuda é fundamental para que mais pessoas possam sorrir com
              dignidade.
            </p>

            <div className="cta-buttons">
              <button className="btn-doar">DOAR AGORA</button>
              <button className="btn-voluntario">
                SEJA VOLUNTÁRIO
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>
              A Turma do Bem é a maior rede de voluntariado especializado do
              mundo.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <p>Email: nosso@email.com.br</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>

          <div className="footer-section">
            <h3>Siga-nos</h3>

            <div className="social-links-footer">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Turma do Bem</p>
        </div>
      </footer>
    </>
  );
}

export default Home;