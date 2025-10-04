'use client'
import React, { useState } from 'react'

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq')
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: ''
  })

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'Comment commencer avec la plateforme ?',
      answer: 'Pour commencer, consultez notre guide de démarrage rapide dans la documentation. Vous pouvez créer un compte, suivre le tutoriel d\'introduction et explorer les fonctionnalités de base.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Quels sont les prérequis techniques ?',
      answer: 'Notre plateforme nécessite Node.js 16+, npm ou yarn, et un navigateur moderne. Pour le développement mobile, React Native CLI est recommandé.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'Comment fonctionne la facturation ?',
      answer: 'Nous proposons plusieurs plans tarifaires adaptés à vos besoins. La facturation se fait mensuellement ou annuellement avec des remises pour les abonnements annuels.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez modifier votre plan à tout moment depuis votre tableau de bord. Les changements prennent effet immédiatement.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'Comment résoudre les erreurs de déploiement ?',
      answer: 'Vérifiez d\'abord vos logs de déploiement, assurez-vous que toutes les dépendances sont installées et que les variables d\'environnement sont correctement configurées.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'La plateforme est-elle compatible avec TypeScript ?',
      answer: 'Oui, notre plateforme supporte entièrement TypeScript. Vous pouvez utiliser nos types prédéfinis ou créer vos propres définitions.'
    },
    {
      id: 7,
      category: 'account',
      question: 'Comment réinitialiser mon mot de passe ?',
      answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion, entrez votre email et suivez les instructions envoyées par email.'
    },
    {
      id: 8,
      category: 'account',
      question: 'Comment supprimer mon compte ?',
      answer: 'Rendez-vous dans les paramètres de votre compte, section "Sécurité", et cliquez sur "Supprimer le compte". Cette action est irréversible.'
    }
  ]

  const categories = [
    { id: 'general', name: 'Général', icon: '❓', count: 2 },
    { id: 'technical', name: 'Technique', icon: '🔧', count: 2 },
    { id: 'billing', name: 'Facturation', icon: '💳', count: 2 },
    { id: 'account', name: 'Compte', icon: '👤', count: 2 }
  ]

  const supportChannels = [
    {
      title: 'Chat en direct',
      description: 'Obtenez une aide immédiate de notre équipe support',
      icon: '💬',
      availability: 'Lun-Ven 9h-18h',
      responseTime: 'Immédiat',
      color: 'bg-green-500'
    },
    {
      title: 'Email Support',
      description: 'Envoyez-nous vos questions détaillées par email',
      icon: '📧',
      availability: '24h/24, 7j/7',
      responseTime: '< 4h',
      color: 'bg-blue-500'
    },
    {
      title: 'Communauté',
      description: 'Échangez avec d\'autres développeurs',
      icon: '👥',
      availability: '24h/24, 7j/7',
      responseTime: 'Variable',
      color: 'bg-purple-500'
    },
    {
      title: 'Documentation',
      description: 'Consultez nos guides et tutoriels',
      icon: '📚',
      availability: 'Toujours disponible',
      responseTime: 'Immédiat',
      color: 'bg-orange-500'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    // Ici vous ajouteriez la logique d'envoi
    alert('Votre message a été envoyé avec succès !')
    setContactForm({
      name: '',
      email: '',
      subject: '',
      priority: 'medium',
      message: ''
    })
  }

  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <span className="mr-3">❓</span>
            Centre d'aide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour vous aider. Trouvez des réponses ou contactez notre équipe support.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-delay">
          {supportChannels.map((channel, index) => (
            <div
              key={channel.title}
              className="bg-white rounded-xl shadow-lg p-6 card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">{channel.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Disponibilité:</span>
                  <span className="font-medium">{channel.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span>Réponse:</span>
                  <span className="font-medium">{channel.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in-delay-2">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'faq', label: 'FAQ', icon: '❓' },
                { id: 'contact', label: 'Nous contacter', icon: '📞' },
                { id: 'status', label: 'Statut du service', icon: '🟢' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } transition-colors duration-200`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'faq' && (
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'filter-active text-white'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{category.icon}</span>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-white bg-opacity-20'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* FAQ Content */}
                <div className="lg:col-span-3">
                  <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-all duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                          <button className="hover:text-blue-600 transition-colors">👍 Utile</button>
                          <button className="hover:text-blue-600 transition-colors">👎 Pas utile</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Contactez-nous</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priorité</label>
                    <select
                      value={contactForm.priority}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg form-input"
                    >
                      <option value="low">Faible</option>
                      <option value="medium">Moyenne</option>
                      <option value="high">Haute</option>
                      <option value="urgent">Urgente</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg form-input"
                      placeholder="Décrivez votre problème ou votre question en détail..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-white py-3 px-6 rounded-lg btn-hover font-medium"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'status' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Statut du service</h3>
                
                {/* Overall Status */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-lg font-semibold text-green-800">Tous les systèmes opérationnels</span>
                  </div>
                </div>

                {/* Services Status */}
                <div className="space-y-4">
                  {[
                    { name: 'API principale', status: 'operational', uptime: '99.9%' },
                    { name: 'Base de données', status: 'operational', uptime: '100%' },
                    { name: 'CDN', status: 'operational', uptime: '99.8%' },
                    { name: 'Authentification', status: 'operational', uptime: '99.9%' },
                    { name: 'Notifications', status: 'degraded', uptime: '97.2%' },
                    { name: 'Déploiements', status: 'operational', uptime: '99.5%' }
                  ].map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'operational' ? 'bg-green-500' :
                          service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-medium text-gray-900">{service.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{service.uptime} uptime</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.status === 'operational' ? 'bg-green-100 text-green-800' :
                          service.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {service.status === 'operational' ? 'Opérationnel' :
                           service.status === 'degraded' ? 'Dégradé' : 'En panne'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Incident History */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Incidents récents</h4>
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">Maintenance programmée</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            Mise à jour de la base de données - 30 minutes d'interruption
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">Il y a 2 jours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
