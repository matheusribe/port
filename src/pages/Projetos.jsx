import { useState, useMemo, memo } from 'react';
import { PROJETOS } from '../data/dados';
import SkillTag from '../components/SkillTag';

function Projetos() {
  const [selectedProject, setSelectedProject] = useState(PROJETOS[0].id);
  
  const projeto = useMemo(
    () => PROJETOS.find(p => p.id === selectedProject),
    [selectedProject]
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projetos
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {PROJETOS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProject(proj.id)}
              className={`card text-left p-3 transition-all duration-200 ${
                selectedProject === proj.id 
                  ? 'ring-2 ring-blue-600 dark:ring-blue-400' 
                  : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-slate-600'
              }`}
            >
              <div className="aspect-video mb-3 overflow-hidden rounded-md bg-gray-100 dark:bg-slate-700">
                <img 
                  src={proj.imagem} 
                  alt={proj.titulo}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
                {proj.titulo}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {proj.categoria}
              </p>
            </button>
          ))}
        </div>
        
        <article className="card">
          <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center">
            <img 
              src={projeto.imagem} 
              alt={`Screenshot do projeto ${projeto.titulo}`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {projeto.titulo}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {projeto.categoria}
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                Descrição
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {projeto.descricao}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                Contexto do Problema
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {projeto.contexto}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                Abordagem Analítica
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {projeto.abordagem}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <SkillTag key={tech}>{tech}</SkillTag>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link"
              >
                Ver Repositório →
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default memo(Projetos)
