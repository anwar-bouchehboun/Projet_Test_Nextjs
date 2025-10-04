'use client'
import React, { useState } from 'react'

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tout', icon: '📚', count: 24 },
    { id: 'getting-started', name: 'Démarrage', icon: '🚀', count: 6 },
    { id: 'api', name: 'API', icon: '🔌', count: 8 },
    { id: 'components', name: 'Composants', icon: '🧩', count: 5 },
    { id: 'guides', name: 'Guides', icon: '📖', count: 3 },
    { id: 'troubleshooting', name: 'Dépannage', icon: '🔧', count: 2 }
  ]

  const documentation = [
    {
      id: 1,
      title: 'Guide de démarrage rapide',
      description: 'Apprenez à configurer et démarrer votre premier projet en moins de 5 minutes',
      category: 'getting-started',
      readTime: '5 min',
      difficulty: 'Débutant',
      lastUpdated: '2025-10-01',
      tags: ['installation', 'setup', 'configuration'],
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Documentation API REST',
      description: 'Guide complet pour utiliser notre API REST avec des exemples pratiques',
      category: 'api',
      readTime: '15 min',
      difficulty: 'Intermédiaire',
      lastUpdated: '2025-09-28',
      tags: ['API', 'REST', 'endpoints'],
      icon: '🔌'
    },
    {
      id: 3,
      title: 'Composants UI réutilisables',
      description: 'Collection de composants React prêts à utiliser dans vos projets',
      category: 'components',
      readTime: '20 min',
      difficulty: 'Intermédiaire',
      lastUpdated: '2025-09-25',
      tags: ['React', 'UI', 'composants'],
      icon: '🧩'
    },
    {
      id: 4,
      title: 'Authentification et sécurité',
      description: 'Implémentez l\'authentification sécurisée avec JWT et OAuth',
      category: 'guides',
      readTime: '25 min',
      difficulty: 'Avancé',
      lastUpdated: '2025-09-20',
      tags: ['auth', 'sécurité', 'JWT'],
      icon: '🔐'
    },
    {
      id: 5,
      title: 'Déploiement en production',
      description: 'Guide étape par étape pour déployer votre application en production',
      category: 'guides',
      readTime: '30 min',
      difficulty: 'Avancé',
      lastUpdated: '2025-09-15',
      tags: ['déploiement', 'production', 'DevOps'],
      icon: '🚀'
    },
    {
      id: 6,
      title: 'Résolution des erreurs courantes',
      description: 'Solutions aux problèmes les plus fréquemment rencontrés',
      category: 'troubleshooting',
      readTime: '10 min',
      difficulty: 'Débutant',
      lastUpdated: '2025-09-30',
      tags: ['erreurs', 'debug', 'solutions'],
      icon: '🔧'
    },
    {
      id: 7,
      title: 'Configuration avancée',
      description: 'Personnalisez votre environnement avec des configurations avancées',
      category: 'getting-started',
      readTime: '18 min',
      difficulty: 'Intermédiaire',
      lastUpdated: '2025-09-22',
      tags: ['configuration', 'personnalisation'],
      icon: '⚙️'
    },
    {
      id: 8,
      title: 'API GraphQL',
      description: 'Intégration et utilisation de GraphQL dans vos applications',
      category: 'api',
      readTime: '22 min',
      difficulty: 'Avancé',
      lastUpdated: '2025-09-18',
      tags: ['GraphQL', 'API', 'queries'],
      icon: '📊'
    }
  ]

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800'
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800'
      case 'Avancé': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const popularArticles = documentation
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <span className="mr-3">📚</span>
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez tout ce dont vous avez besoin pour développer avec notre plateforme
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-delay">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent form-input text-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-delay-2">
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

            {/* Popular Articles */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-delay-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles populaires</h3>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <div key={article.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">{article.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{article.title}</h4>
                        <p className="text-xs text-gray-500">{article.readTime} • {article.difficulty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6 animate-fade-in-delay-2">
              <p className="text-gray-600">
                {filteredDocs.length} article{filteredDocs.length > 1 ? 's' : ''} trouvé{filteredDocs.length > 1 ? 's' : ''}
                {searchTerm && ` pour "${searchTerm}"`}
              </p>
            </div>

            {/* Documentation Grid */}
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in-delay-2">
              {filteredDocs.map((doc, index) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                          <span className="text-white text-xl">{doc.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.title}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                              {doc.difficulty}
                            </span>
                            <span className="text-sm text-gray-500">• {doc.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{doc.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Mis à jour le {new Date(doc.lastUpdated).toLocaleDateString('fr-FR')}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                        Lire →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredDocs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
                <p className="text-gray-500 mb-6">
                  Essayez de modifier votre recherche ou parcourez les catégories
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                  className="btn-primary text-white px-6 py-3 rounded-lg btn-hover"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 animate-fade-in-delay-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Liens utiles</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Changelog', desc: 'Dernières mises à jour', icon: '📝', color: 'bg-blue-500' },
              { title: 'FAQ', desc: 'Questions fréquentes', icon: '❓', color: 'bg-green-500' },
              { title: 'Contact', desc: 'Contactez notre équipe', icon: '📞', color: 'bg-purple-500' },
              { title: 'Community', desc: 'Rejoignez la communauté', icon: '👥', color: 'bg-orange-500' }
            ].map((link, index) => (
              <div
                key={link.title}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200 cursor-pointer card-hover"
              >
                <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center mb-3`}>
                  <span className="text-white">{link.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
