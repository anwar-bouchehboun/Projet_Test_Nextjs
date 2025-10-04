'use client'
import React, { useState } from 'react'

const Team = () => {
  const [activeTab, setActiveTab] = useState('members')

  const teamMembers = [
    {
      id: 1,
      name: 'Alexandre Dubois',
      role: 'Lead Developer',
      email: 'alexandre.dubois@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'online',
      department: 'Développement',
      joinDate: '2023-01-15',
      skills: ['React', 'Node.js', 'TypeScript'],
      projects: 8,
      location: 'Paris, France'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      role: 'UI/UX Designer',
      email: 'marie.laurent@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'online',
      department: 'Design',
      joinDate: '2023-03-20',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      projects: 5,
      location: 'Lyon, France'
    },
    {
      id: 3,
      name: 'Thomas Martin',
      role: 'Backend Developer',
      email: 'thomas.martin@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'offline',
      department: 'Développement',
      joinDate: '2022-11-10',
      skills: ['Python', 'Django', 'PostgreSQL'],
      projects: 6,
      location: 'Marseille, France'
    },
    {
      id: 4,
      name: 'Sophie Chen',
      role: 'Product Manager',
      email: 'sophie.chen@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'busy',
      department: 'Produit',
      joinDate: '2023-02-05',
      skills: ['Agile', 'Scrum', 'Analytics'],
      projects: 12,
      location: 'Bordeaux, France'
    },
    {
      id: 5,
      name: 'Lucas Rodriguez',
      role: 'DevOps Engineer',
      email: 'lucas.rodriguez@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'online',
      department: 'Infrastructure',
      joinDate: '2023-04-12',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      projects: 4,
      location: 'Toulouse, France'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      role: 'QA Engineer',
      email: 'emma.wilson@techsolutions.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
      status: 'offline',
      department: 'Qualité',
      joinDate: '2023-05-18',
      skills: ['Selenium', 'Jest', 'Cypress'],
      projects: 7,
      location: 'Nantes, France'
    }
  ]

  const departments = [
    { name: 'Développement', count: 2, color: 'bg-blue-500' },
    { name: 'Design', count: 1, color: 'bg-purple-500' },
    { name: 'Produit', count: 1, color: 'bg-green-500' },
    { name: 'Infrastructure', count: 1, color: 'bg-orange-500' },
    { name: 'Qualité', count: 1, color: 'bg-red-500' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'offline': return 'bg-gray-400'
      case 'busy': return 'bg-red-500'
      default: return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'En ligne'
      case 'offline': return 'Hors ligne'
      case 'busy': return 'Occupé'
      default: return 'Inconnu'
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
                <span className="mr-3">👥</span>
                Notre Équipe
              </h1>
              <p className="mt-2 text-gray-600">Découvrez les membres de notre équipe talentueuse</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="btn-primary text-white px-6 py-3 rounded-lg btn-hover">
                + Inviter un membre
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-delay">
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Membres</p>
                <p className="text-2xl font-bold text-blue-600">{teamMembers.length}</p>
              </div>
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">En ligne</p>
                <p className="text-2xl font-bold text-green-600">
                  {teamMembers.filter(m => m.status === 'online').length}
                </p>
              </div>
              <span className="text-2xl">🟢</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Départements</p>
                <p className="text-2xl font-bold text-purple-600">{departments.length}</p>
              </div>
              <span className="text-2xl">🏢</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Projets Actifs</p>
                <p className="text-2xl font-bold text-orange-600">
                  {teamMembers.reduce((total, member) => total + member.projects, 0)}
                </p>
              </div>
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in-delay-2">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'members', label: 'Membres', icon: '👤' },
                { id: 'departments', label: 'Départements', icon: '🏢' },
                { id: 'hierarchy', label: 'Hiérarchie', icon: '📊' }
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
            {activeTab === 'members' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="bg-gray-50 rounded-xl p-6 card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 rounded-full image-hover"
                        />
                        <div className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{getStatusText(member.status)}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📧</span>
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">🏢</span>
                        <span>{member.department}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📍</span>
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📅</span>
                        <span>Depuis {new Date(member.joinDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Compétences</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{member.projects}</span> projet{member.projects > 1 ? 's' : ''}
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'departments' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => (
                  <div
                    key={dept.name}
                    className="bg-gray-50 rounded-xl p-6 card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${dept.color} rounded-xl flex items-center justify-center`}>
                        <span className="text-white text-xl">🏢</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                        <p className="text-sm text-gray-600">{dept.count} membre{dept.count > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {teamMembers
                        .filter(member => member.department === dept.name)
                        .map(member => (
                          <div key={member.id} className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                              <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'hierarchy' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏗️</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Hiérarchie organisationnelle</h3>
                <p className="text-gray-500 mb-6">Cette fonctionnalité sera bientôt disponible</p>
                <button className="btn-primary text-white px-6 py-3 rounded-lg btn-hover">
                  En savoir plus
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
