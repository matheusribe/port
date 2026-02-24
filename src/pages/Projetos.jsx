import { useState, useMemo, memo } from 'react';
import { PROJETOS } from '../data/dados';
import SkillTag from '../components/SkillTag';

function Projetos() {
  const [selectedProject, setSelectedProject] = useState(PROJETOS[0].id);
  
  const projeto = useMemo(
    () => PROJETOS.find(p => p.id === selectedProject),
    [selectedProject]
  );

  const handleChange = useMemo(
    () => (e) => setSelectedProject(e.target.value),
    []
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projetos
        </h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Selecione um projeto
          </label>
          <select
            value={selectedProject}
            onChange={handleChange}
            className="form-input max-w-md"
          >
            {PROJETOS.map(p => (
              <option key={p.id} value={p.id}>{p.titulo}</option>
            ))}
          </select>
        </div>
        
        <article className="card">
          <div className="mb-6 overflow-hidden rounded-lg">
            <img 
              src={projeto.imagem} 
              alt={`Screenshot do projeto ${projeto.titulo}`}
              className="w-full h-auto max-h-96 object-contain bg-gray-50 dark:bg-slate-800 transition-transform duration-300 hover:scale-[1.02]"
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
