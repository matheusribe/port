import { SKILLS, PROFICIENCIA } from '../data/dados';
import SkillTag from '../components/SkillTag';

export default function Skills() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Skills Técnicas
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Stack técnica organizada por categorias, representando competências em 
          Linguagens, Bibliotecas, Análise de Dados, Machine Learning e ferramentas de BI.
        </p>
      </section>
      
      <div className="divider" />
      
      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Análise de Dados
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.AnaliseDados.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.MachineLearning.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Avaliação de Modelos
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.AvaliacaoModelos.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Pré-processamento
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.Preprocessamento.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Linguagens
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.Linguagens.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Bibliotecas Python
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.Bibliotecas.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Visualização
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.Visualizacao.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Business Intelligence
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.BI.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Versionamento
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.Versionamento.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="divider" />
      
      <section>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Metodologias
        </h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.Metodologias.map(skill => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      </section>
      
      <div className="divider" />
      
      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Níveis de Proficiência
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Categoria
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nível
                </th>
              </tr>
            </thead>
            <tbody>
              {PROFICIENCIA.map((item, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 dark:border-slate-800"
                >
                  <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                    {item.categoria}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.nivel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
