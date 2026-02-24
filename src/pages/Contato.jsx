import { memo } from 'react'
import { PERFIL } from '../data/dados'

function Contato() {
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
      
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Canais de Comunicação
        </h2>
        
        <nav className="space-y-3" aria-label="Links de contato">
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
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">WhatsApp</p>
            <a
              href={PERFIL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="page-link"
            >
              {PERFIL.telefone}
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
    </div>
  )
}

export default memo(Contato)
