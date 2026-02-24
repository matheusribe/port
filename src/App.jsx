import { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

const Home = lazy(() => import('./pages/Home'))
const Sobre = lazy(() => import('./pages/Sobre'))
const Projetos = lazy(() => import('./pages/Projetos'))
const Skills = lazy(() => import('./pages/Skills'))
const Contato = lazy(() => import('./pages/Contato'))

const PAGE_COMPONENTS = Object.freeze({
  home: Home,
  sobre: Sobre,
  projetos: Projetos,
  skills: Skills,
  contato: Contato
})

export default function App({ initialTheme }) {
  const [currentPage, setCurrentPage] = useState('home')
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }, [])

  const handlePageChange = useCallback((pageId) => {
    setCurrentPage(pageId)
  }, [])

  const PageComponent = PAGE_COMPONENTS[currentPage]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-200">
      <Header 
        currentPage={currentPage} 
        onNavigate={handlePageChange}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow max-w-5xl mx-auto px-6 py-10 w-full mb-6">
        <Suspense fallback={<LoadingSpinner />}>
          <PageComponent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
