import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Skills from './pages/Skills';
import Contato from './pages/Contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'sobre':
        return <Sobre />;
      case 'projetos':
        return <Projetos />;
      case 'skills':
        return <Skills />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-200">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-10 w-full">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
