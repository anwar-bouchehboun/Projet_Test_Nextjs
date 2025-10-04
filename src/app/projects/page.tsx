'use client'
import React, { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const projects = [
    {
      id: 1,
      title: 'E-commerce App',
      description: 'Application de commerce électronique moderne avec React et Node.js',
      status: 'En cours',
      progress: 75,
      tech: ['React', 'Node.js', 'MongoDB'],
      team: 4,
      deadline: '2025-11-15',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Site web portfolio personnel avec animations avancées',
      status: 'Terminé',
      progress: 100,
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      team: 1,
      deadline: '2025-09-30',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'API Backend',
      description: 'API REST robuste pour applications mobiles et web',
      status: 'En cours',
      progress: 60,
      tech: ['Node.js', 'Express', 'PostgreSQL'],
      team: 3,
      deadline: '2025-12-01',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Mobile App',
      description: 'Application mobile cross-platform avec React Native',
      status: 'Planifié',
      progress: 20,
      tech: ['React Native', 'Firebase', 'Redux'],
      team: 5,
      deadline: '2026-02-15',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'low'
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord d\'analyse de données en temps réel',
      status: 'En cours',
      progress: 85,
      tech: ['Vue.js', 'D3.js', 'WebSocket'],
      team: 2,
      deadline: '2025-10-20',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'medium'
    },
    {
      id: 6,
      title: 'CRM System',
      description: 'Système de gestion de la relation client complet',
      status: 'En cours',
      progress: 40,
      tech: ['Angular', 'Laravel', 'MySQL'],
      team: 6,
      deadline: '2026-01-30',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format&q=80',
      priority: 'high'
    }
  ]

  const filters = [
    { id: 'all', label: 'Tous', count: projects.length },
    { id: 'active', label: 'En cours', count: projects.filter(p => p.status === 'En cours').length },
    { id: 'completed', label: 'Terminés', count: projects.filter(p => p.status === 'Terminé').length },
    { id: 'planned', label: 'Planifiés', count: projects.filter(p => p.status === 'Planifié').length }
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'active') return project.status === 'En cours'
    if (filter === 'completed') return project.status === 'Terminé'
    if (filter === 'planned') return project.status === 'Planifié'
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800'
      case 'Terminé': return 'bg-green-100 text-green-800'
      case 'Planifié': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <span className="mr-3">📁</span>
                Mes Projets
              </h1>
              <p className="mt-2 text-gray-600">Gérez et suivez l'avancement de vos projets</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="btn-primary text-white px-6 py-3 rounded-lg btn-hover">
                + Nouveau Projet
              </button>
            </div>
          </div>
        </div>

        {/* Filters and View Mode */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in-delay">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filter === filterItem.id
                      ? 'filter-active text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filterItem.label} ({filterItem.count})
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={`${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        } animate-fade-in-delay-2`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover image-hover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority === 'high' ? 'Haute' : project.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Progression</span>
                    <span className="text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-blue h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="mr-1">👥</span>
                    {project.team} membre{project.team > 1 ? 's' : ''}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">📅</span>
                    {new Date(project.deadline).toLocaleDateString('fr-FR')}
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Voir détails
                  </button>
                  <button className="btn-primary text-white py-2 px-3 rounded-lg text-sm font-medium btn-hover">
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun projet trouvé</h3>
            <p className="text-gray-500 mb-6">Essayez de changer les filtres ou créez un nouveau projet</p>
            <button className="btn-primary text-white px-6 py-3 rounded-lg btn-hover">
              Créer mon premier projet
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
