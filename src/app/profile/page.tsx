'use client'
import React, { useState } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: 'Alexandre Dubois',
    email: 'alexandre.dubois@email.com',
    phone: '+33 1 23 45 67 89',
    location: 'Paris, France',
    title: 'Développeur Full Stack',
    company: 'Tech Solutions',
    bio: 'Passionné par le développement web et les nouvelles technologies. Spécialisé en React, Next.js et Node.js avec plus de 5 ans d\'expérience.'
  })

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '👤' },
    { id: 'settings', label: 'Paramètres', icon: '⚙️' },
    { id: 'security', label: 'Sécurité', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' }
  ]

  const stats = [
    { label: 'Projets', value: '24', icon: '📁', color: 'text-blue-600' },
    { label: 'Collaborateurs', value: '156', icon: '👥', color: 'text-green-600' },
    { label: 'Commits', value: '1,247', icon: '💻', color: 'text-purple-600' },
    { label: 'Étoiles', value: '89', icon: '⭐', color: 'text-yellow-600' }
  ]

  const activities = [
    { action: 'Créé un nouveau projet', project: 'E-commerce App', time: 'Il y a 2h', type: 'create' },
    { action: 'Mis à jour', project: 'Portfolio Website', time: 'Il y a 4h', type: 'update' },
    { action: 'Commit sur', project: 'API Backend', time: 'Il y a 1j', type: 'commit' },
    { action: 'Collaboré sur', project: 'Mobile App', time: 'Il y a 2j', type: 'collab' }
  ]

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'TypeScript', level: 92, color: 'bg-blue-600' },
    { name: 'Python', level: 75, color: 'bg-yellow-500' },
    { name: 'Docker', level: 80, color: 'bg-cyan-500' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Profile */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 animate-fade-in">
          <div className="h-32 bg-gradient-blue relative">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-12">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg image-hover"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white badge-glow"></div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{userInfo.name}</h1>
                <p className="text-lg text-gray-600">{userInfo.title}</p>
                <p className="text-sm text-gray-500">{userInfo.company} • {userInfo.location}</p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-primary text-white px-6 py-2 rounded-lg btn-hover"
                >
                  {isEditing ? 'Sauvegarder' : 'Modifier'}
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg btn-hover bg-white">
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-delay">
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-delay-2">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
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
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">À propos</h3>
                      {isEditing ? (
                        <textarea
                          value={userInfo.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg form-input"
                          rows={4}
                        />
                      ) : (
                        <p className="text-gray-600 leading-relaxed">{userInfo.bio}</p>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences</h3>
                      <div className="space-y-3">
                        {skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-gray-700">{skill.name}</span>
                              <span className="text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Informations personnelles</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                        <input
                          type="tel"
                          value={userInfo.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                        <input
                          type="text"
                          value={userInfo.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg form-input"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Sécurité du compte</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Authentification à deux facteurs</h4>
                          <p className="text-sm text-gray-500">Sécurisez votre compte avec 2FA</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg btn-hover">
                          Activé
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Changer le mot de passe</h4>
                          <p className="text-sm text-gray-500">Dernière modification il y a 30 jours</p>
                        </div>
                        <button className="btn-primary text-white px-4 py-2 rounded-lg btn-hover">
                          Modifier
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Préférences de notification</h3>
                    <div className="space-y-4">
                      {['Emails de marketing', 'Notifications de projet', 'Mises à jour de sécurité', 'Nouvelles fonctionnalités'].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <span className="font-medium text-gray-700">{item}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Activité récente */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-delay-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      activity.type === 'create' ? 'bg-green-100 text-green-600' :
                      activity.type === 'update' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'commit' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.type === 'create' ? '✨' :
                       activity.type === 'update' ? '🔄' :
                       activity.type === 'commit' ? '💾' : '🤝'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.action}</span>
                        <span className="text-blue-600 ml-1">{activity.project}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Liens rapides</h3>
              <div className="space-y-3">
                {[
                  { label: 'Mes projets', icon: '📁', href: '/projects' },
                  { label: 'Équipe', icon: '👥', href: '/team' },
                  { label: 'Documentation', icon: '📚', href: '/docs' },
                  { label: 'Support', icon: '❓', href: '/support' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span>{link.icon}</span>
                    <span className="text-gray-700">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile