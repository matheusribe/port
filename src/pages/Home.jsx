import { PERFIL, PROJETOS } from '../data/dados';
import SkillTag from '../components/SkillTag';

const areas = [
  'Análise de Dados',
  'Ciência de Dados',
  'Machine Learning',
  'Business Intelligence'
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {PERFIL.nome}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {PERFIL.localizacao}
            </p>
            <h2 className="text-lg text-gray-700 dark:text-gray-300 mt-3 font-medium">
              {PERFIL.titulo}
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {PERFIL.resumo}
          </p>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Áreas de Atuação
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600 dark:text-gray-400">
              {areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="card">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Contato
            </h3>
            <nav className="space-y-2">
              <a
                href={PERFIL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link block"
              >
                GitHub
              </a>
              <a
                href={`mailto:${PERFIL.email}`}
                className="page-link block"
              >
                E-mail
              </a>
              <a
                href={PERFIL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link block"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      <div className="divider" />
      
      <section>
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJETOS.slice(0, 2).map((projeto) => (
            <article key={projeto.id} className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {projeto.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {projeto.descricao}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {projeto.tecnologias.map((tech) => (
                  <SkillTag key={tech}>{tech}</SkillTag>
                ))}
              </div>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="page-link text-sm"
              >
                Ver Projeto →
              </a>
            </article>
          ))}
        </div>
      </section>
      
      <div className="divider" />
      
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        <strong>Python</strong> • <strong>Pandas</strong> • <strong>Scikit-learn</strong> • <strong>Plotly</strong> • <strong>Power BI</strong> • <strong>Tableau</strong>
      </p>
    </div>
  );
}
