import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Doar from './pages/Doar';
import Integrantes from './pages/Integrantes';
import './index.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent">
        {/* O Header fica fixo no topo */}
        <Header />

        {/* O conteúdo principal cresce para empurrar o footer para baixo */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doar" element={<Doar />} />
            <Route path="/integrantes" element={<Integrantes />} />
            
            {/* Rotas para os cadastros específicos */}
            <Route path="/cadastrar-aluno" element={<div className="p-20 text-center">Página da Professora (Em breve)</div>} />
            <Route path="/seja-voluntario" element={<div className="p-20 text-center">Página do Dentista/Estagiário (Em breve)</div>} />
            
            {/* Rota de 404 minimalista */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <h1 className="text-6xl font-bold text-accent">404</h1>
                <p className="text-subtext">Página não encontrada.</p>
              </div>
            } />
          </Routes>
        </main>

        {/* O Footer no final de todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;