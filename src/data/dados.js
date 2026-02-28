export const PERFIL = {
  nome: "Matheus Costa Ribeiro",
  titulo: "Analista de Dados | Ciência de Dados | Machine Learning | BI",
  localizacao: "São Paulo, Brasil",
  telefone: "+55 (71) 9 9925 6128",
  whatsapp: "https://wa.me/5571999256128",
  github: "https://github.com/matheusribe",
  email: "matheuscribe@gmail.com",
  linkedin: "https://www.linkedin.com/in/matheusribe",
  resumo: `Analista de dados com formação em Ciência da Computação e especialização em 
Ciência de Dados e Big Data. Experiência em análise exploratória, machine learning 
supervisionado e visualização de dados. Foco em transformar dados em insights 
acionáveis através de rigor analítico e metodologias estatísticas.`
};

export const FORMACAO = [
  {
    tipo: "Pós-graduação (Lato Sensu)",
    curso: "Ciência de Dados e Big Data",
    instituicao: "PUC Minas",
    periodo: "Abr. 2025 – Out. 2026",
    status: "Em andamento"
  },
  {
    tipo: "Bacharelado",
    curso: "Ciência da Computação",
    instituicao: "Centro Universitário Jorge Amado",
    periodo: "2021 – 2024",
    status: "Concluído"
  }
];

export const EXPERIENCIA = [
  {
    empresa: "APAE Salvador",
    cargo: "Estagiário em Tecnologia da Informação",
    periodo: "2021 – 2024",
    atividades: [
      "Suporte técnico e manutenção de hardware",
      "Suporte à infraestrutura de rede",
      "Elaboração de documentação técnica para interfaceamento de máquinas laboratoriais",
      "Desenvolvimento de fluxos automatizados para cruzamento de dados e controle de atendimentos"
    ]
  }
];

export const IDIOMAS = [
  { idioma: "Português", nivel: "Nativo" },
  { idioma: "Inglês", nivel: "C2" }
];

export const PROJETOS = [
  {
    id: "salary_dash",
    titulo: "Dashboard de Salários — Análise de Dados",
    imagem: "/images/salary-dash.png",
    descricao: `Dashboard interativo para análise de salários em posições de dados (Data Science, Data Engineering, Analytics) com filtros por senioridade, tipo de contrato, localização e tamanho da empresa.`,
    contexto: `Análise completa de salários com 5.000+ registros de 2020-2025, representando 50+ países e 100+ tipos de cargos diferentes na área de dados.`,
    abordagem: `Filtros interativos (ano, senioridade, tipo de contrato), visualizações dinâmicas (top 10 salários, histogramas, box plots), evolução salarial anual, distribuição por senioridade, mapa coroplético por país, heatmap país × senioridade, comparação remoto vs presencial vs híbrido.`,
    tecnologias: ["Python", "Streamlit", "Pandas", "Plotly"],
    link: "https://github.com/matheusribe/salary-dash",
    categoria: "Análise de Dados"
  },
  {
    id: "music_classification",
    titulo: "Classificação de Músicas Utilizando Atributos Acústicos",
    imagem: "/images/p_class_music.png",
    descricao: `Pipeline completo de classificação de músicas fundamentado na hipótese de que atributos acústicos permitem distinguir faixas mais lentas ou mais agitadas. Classificação binária baseada em valence (≤ 0.5 = lentas, > 0.5 = agitadas), com validação estatística e otimização de hiperparâmetros.`,
    contexto: `Investigação de como atributos acústicos extraídos automaticamente (danceability, energy, acousticness, loudness) podem discriminar músicas de forma estatisticamente válida, preditivamente eficiente e semanticamente interpretável. O projeto integra análise exploratória, validação estatística e modelagem supervisionada.`,
    abordagem: `EDA com visualizações (histogramas, violin plots), teste Mann-Whitney U para validação estatística, Regressão Logística/KNN/Random Forest, Validação Cruzada k-fold, RandomizedSearchCV, Feature Importance para interpretação.`,
    tecnologias: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy"],
    link: "https://github.com/matheusribe/Music-Classification-Using-Acoustic-Features",
    categoria: "Machine Learning"
  },
  {
    id: "vendas_bi",
    titulo: "Análise de Vendas com Tableau e Excel",
    imagem: "/images/tableau_pvendas.png",
    descricao: `Estudo de análise de vendas focado na geração de insights e projeções aplicáveis ao mercado corporativo. O projeto abrangeu todas as etapas, desde a limpeza e padronização dos dados até a criação de dashboards dinâmicos e aplicação de modelos preditivos.`,
    contexto: `Análise enfocada em suporte à tomada de decisões corporativa com métricas estratégicas. Construção de indicadores-chave de performance, análise de sazonalidade e projeções baseadas em padrões históricos.`,
    abordagem: `Limpeza e padronização de dados (Excel), construção de KPIs estratégicos, modelos de tendência para projeção de vendas, visualizações dinâmicas com filtros interativos por período, região, canal de vendas e categoria de produto.`,
    tecnologias: ["Excel", "Tableau"],
    link: "https://public.tableau.com/views/projeto-analise-dados-vendas/Dashboard",
    categoria: "Business Intelligence"
  },
  {
    id: "mindmetrics",
    titulo: "MindMetrics — Análise do Impacto do Uso de Telas na Saúde Mental",
    imagem: "/images/mindmetrics.png",
    descricao: `Plataforma de análise de dados para investigar impactos do uso de dispositivos eletrônicos na saúde mental. Processa dados de 105 respondentes explorando correlações entre padrões de uso de telas e indicadores de bem-estar psicológico, incluindo qualidade do sono, níveis de estresse e efeitos adversos percebidos.`,
    contexto: `A ascensão exponencial da tecnologia digital trouxe integração das telas em diversos âmbitos da vida cotidiana. O aumento no tempo de tela e na conectividade constante levanta preocupações significativas sobre os impactos na saúde mental. Esta pesquisa busca investigar essas relações de forma empírica, fornecendo uma base quantitativa para compreender como diferentes padrões de uso de dispositivos eletrônicos se correlacionam com o bem-estar psicológico.`,
    abordagem: `Análise descritiva das distribuições demográficas e de uso, correlações entre uso de telas e indicadores de bem-estar, visualizações interativas com Plotly e Altair, análises estratificadas por grupos demográficos.`,
    tecnologias: ["Python", "Streamlit", "Pandas", "Plotly", "Altair", "openpyxl"],
    link: "https://mindmetric.streamlit.app/",
    categoria: "Análise de Dados"
  }
];

export const SKILLS = {
  Linguagens: ["Python", "SQL"],
  Bibliotecas: ["Pandas", "NumPy", "Scikit-learn", "SciPy"],
  AnaliseDados: ["EDA", "Estatística Descritiva", "Estatística Inferencial", "Validação Estatística", "Mann–Whitney U", "ETL"],
  MachineLearning: ["Classificação Supervisionada", "Regressão Logística", "KNN", "Random Forest", "Feature Importance"],
  AvaliacaoModelos: ["F1-score", "ROC", "AUC", "Matriz de Confusão", "Validação Cruzada (k-fold)", "RandomizedSearchCV"],
  Preprocessamento: ["Feature Selection", "Label Encoding", "MinMaxScaler", "Train/Test Split", "Hold-out Estratificado"],
  Visualizacao: ["Matplotlib", "Seaborn", "Plotly"],
  BI: ["Power BI", "Tableau"],
  Versionamento: ["Git", "GitHub"],
  Metodologias: ["Scrum"]
};

export const PROFICIENCIA = [
  { categoria: "Python", nivel: "Avançado" },
  { categoria: "SQL", nivel: "Intermediário-Avançado" },
  { categoria: "Pandas/NumPy", nivel: "Avançado" },
  { categoria: "Scikit-learn", nivel: "Intermediário-Avançado" },
  { categoria: "Machine Learning", nivel: "Intermediário" },
  { categoria: "Power BI", nivel: "Intermediário" },
  { categoria: "Tableau", nivel: "Intermediário" }
];
