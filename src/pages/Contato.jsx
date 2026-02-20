import { useState } from 'react';
import { PERFIL } from '../data/dados';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      setSubmitted(true);
      setFormData({ nome: '', email: '', mensagem: '' });
    }
  };
  
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contato
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Entre em contato para oportunidades, colaborações ou dúvidas sobre meus projetos.
        </p>
      </section>
      
      <div className="divider" />
      
      <section className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Canais de Comunicação
          </h2>
          
          <nav className="space-y-3">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">GitHub</p>
              <a
                href={PERFIL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link"
              >
                github.com/matheusribe
              </a>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">E-mail</p>
              <a
                href={`mailto:${PERFIL.email}`}
                className="page-link"
              >
                {PERFIL.email}
              </a>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">LinkedIn</p>
              <a
                href={PERFIL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link"
              >
                linkedin.com/in/matheusribe
              </a>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Localização</p>
              <p className="text-gray-700 dark:text-gray-300">
                {PERFIL.localizacao}
              </p>
            </div>
          </nav>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Formulário de Contato
          </h2>
          
          {submitted ? (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-400">
                Obrigado pela mensagem! Em breve retornarei o contato.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
                  rows={4}
                  className="form-input"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>
      
      <div className="divider" />
      
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        Para uma resposta mais rápida, recomendo entrar em contato 
        diretamente pelo e-mail ou LinkedIn.
      </p>
      
      <div className="divider" />
      
      <p className="text-center text-gray-600 dark:text-gray-400">
        <strong>Obrigado pela visita!</strong>
      </p>
    </div>
  );
}
