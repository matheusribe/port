import { memo } from 'react'
import { PERFIL, FORMACAO, EXPERIENCIA, IDIOMAS } from '../data/dados';

const PERFIL_COMPLETO = `Pós-graduando em Ciência de Dados e Big Data (PUC Minas) e Bacharel em Ciência da Computação, com foco em Análise de Dados, Ciência de Dados e Machine Learning, atuando no suporte à tomada de decisões orientada por dados.

Experiência com Python, SQL e ETL, utilizando Pandas, NumPy, Scikit-Learn e SciPy para análise estatística, análise exploratória de dados (EDA), modelagem supervisionada, otimização de hiperparâmetros e interpretação de modelos. Atuação em visualização de dados com Matplotlib, Seaborn, Power BI e Tableau, com foco em comunicação clara de insights.

Conhecimento em pipelines de dados, classificação, feature importance, Business Analytics, Data-Driven Decision Making e validação estatística. Familiaridade com Git/GitHub, metodologias ágeis (Scrum) e inglês avançado (C2) para leitura técnica.

Interesse em oportunidades de nível júnior como Cientista de Dados, Analista de Dados ou Assistente de Dados, atuar em tratamento e preparação de dados, análise exploratória, modelagem básica, visualização, geração de insights e apoio à tomada de decisões orientada a negócio, contribuindo para projetos analíticos e iniciativas de inovação baseada em dados.`

function Sobre() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Sobre Mim
        </h1>
        
        <div className="card mb-8">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {PERFIL_COMPLETO}
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="section-title">Formação Acadêmica</h2>
        <div className="space-y-4">
          {FORMACAO.map((formacao) => (
            <article key={formacao.curso + formacao.instituicao} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {formacao.curso}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formacao.instituicao} • {formacao.periodo}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {formacao.tipo}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {formacao.status}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="section-title">Experiência Profissional</h2>
        <div className="space-y-4">
          {EXPERIENCIA.map((exp, idx) => (
            <article key={`${exp.empresa}-${idx}`} className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {exp.cargo}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {exp.empresa} • {exp.periodo}
              </p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Atividades:
              </p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                {exp.atividades.map((atividade, i) => (
                  <li key={i}>{atividade}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="section-title">Idiomas</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {IDIOMAS.map((idioma) => (
            <div key={idioma.idioma} className="card py-3 px-4">
              <span className="font-medium text-gray-900 dark:text-white">
                {idioma.idioma}
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">
                — {idioma.nivel}
              </span>
            </div>
          ))}
        </div>
      </section>
      
      <div className="card bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-700">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          Para verificar minhas licenças e certificações,{' '}
          <a 
            href={PERFIL.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            acesse meu LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default memo(Sobre)
