import { useState, useCallback, memo } from 'react'
import { PERFIL } from '../data/dados'

function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateForm = useCallback(() => {
    const newErrors = {}
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório'
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setSubmitted(true)
    setFormData({ nome: '', email: '', mensagem: '' })
    setErrors({})
    setIsSubmitting(false)
  }, [validateForm])
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }, [errors])
  
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
        
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Formulário de Contato
          </h2>
          
          {submitted ? (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg" role="alert">
              <p className="text-green-800 dark:text-green-400">
                Obrigado pela mensagem! Em breve retornarei o contato.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`form-input ${errors.nome ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? 'nome-error' : undefined}
                />
                {errors.nome && <p id="nome-error" className="text-red-500 text-xs mt-1">{errors.nome}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className={`form-input ${errors.mensagem ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? 'mensagem-error' : undefined}
                />
                {errors.mensagem && <p id="mensagem-error" className="text-red-500 text-xs mt-1">{errors.mensagem}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default memo(Contato)
