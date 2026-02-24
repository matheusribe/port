import { memo, useMemo } from 'react'

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700 py-6 mt-auto" role="contentinfo">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} Matheus Costa Ribeiro. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
          Desenvolvido com React, Vite e Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
