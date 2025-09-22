import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/posts" className="hover:text-blue-600">Articles</Link>
            <span>›</span>
            <span className="text-gray-900">Premier article</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Technologie
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            L'avenir du développement web : Tendances et innovations pour 2024
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                SL
              </div>
              <div>
                <p className="font-medium text-gray-900">Sophie Laurent</p>
                <p className="text-sm text-gray-500">Développeuse Senior</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>📅 15 Mars 2024</span>
              <span>⏱️ 8 min de lecture</span>
              <span>👁️ 2,345 vues</span>
              <span>💬 23 commentaires</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Partager :</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="p-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Développement web moderne"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>

              {/* Article Body */}
              <div className="p-8">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Le monde du développement web évolue à une vitesse impressionnante. Entre l'intelligence artificielle, 
                    les frameworks JavaScript de nouvelle génération et les architectures serverless, les développeurs 
                    doivent constamment s'adapter aux nouvelles technologies pour rester compétitifs.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    1. L'Intelligence Artificielle au cœur du développement
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    L'IA n'est plus une technologie du futur, elle est déjà là et transforme notre façon de coder. 
                    Des outils comme GitHub Copilot, ChatGPT et Tabnine révolutionnent la productivité des développeurs 
                    en suggérant du code intelligent et en automatisant les tâches répétitives.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Conseil :</strong> Intégrez progressivement l'IA dans votre workflow. 
                          Commencez par utiliser des assistants de code pour les tâches simples avant 
                          de vous aventurer dans des projets plus complexes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    2. React et Next.js : La domination continue
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    React reste le framework JavaScript le plus populaire, et Next.js continue de s'imposer 
                    comme la solution de référence pour les applications React en production. Avec l'introduction 
                    des Server Components et de l'App Router, Next.js 14 offre des performances inégalées.
                  </p>

                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>Server-Side Rendering (SSR) natif</li>
                    <li>Static Site Generation (SSG) optimisé</li>
                    <li>API Routes intégrées</li>
                    <li>Optimisation automatique des images</li>
                    <li>Bundle splitting intelligent</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    3. Tailwind CSS : L'avenir du styling
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    Tailwind CSS a révolutionné la façon dont nous pensons le styling. Cette approche 
                    "utility-first" permet de créer des interfaces cohérentes et maintenables tout en 
                    offrant une flexibilité incroyable pour les designs personnalisés.
                  </p>

                  <div className="bg-gray-100 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Exemple de code Tailwind</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<div className="max-w-md mx-auto bg-white rounded-xl 
  shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" 
        src="/img/building.jpg" alt="Building" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm 
        text-indigo-500 font-semibold">Article</div>
      <p className="mt-2 text-slate-500">
        Description de l'article...
      </p>
    </div>
  </div>
</div>`}
                    </pre>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    4. TypeScript : Plus qu'une tendance
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    TypeScript n'est plus une option, c'est devenu un standard dans l'industrie. 
                    Les avantages en termes de maintenance, de collaboration en équipe et de 
                    détection d'erreurs en font un choix incontournable pour tout projet sérieux.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    5. Conclusion
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    L'écosystème du développement web continue d'évoluer rapidement. Les développeurs 
                    qui s'adaptent à ces nouvelles technologies et méthodologies seront mieux positionnés 
                    pour créer des applications performantes et maintenir leur avantage concurrentiel.
                  </p>

                  <p className="text-gray-700">
                    L'avenir appartient à ceux qui savent allier créativité, technique et innovation. 
                    Restez curieux, continuez d'apprendre et n'hésitez pas à expérimenter avec ces 
                    nouvelles technologies !
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 mr-2">Tags :</span>
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'Web Development'].map((tag) => (
                      <Link
                        key={tag}
                        href={`/posts/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-6">
                  SL
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Sophie Laurent</h3>
                  <p className="text-gray-600 mb-2">Développeuse Senior & Tech Lead</p>
                  <p className="text-gray-700">
                    Passionnée par les technologies web modernes, Sophie partage son expertise 
                    à travers des articles techniques et des formations. Elle travaille depuis 
                    8 ans dans le développement React et Next.js.
                  </p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Commentaires (23)</h3>
              
              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ajouter un commentaire..."
                />
                <div className="mt-4 flex justify-end">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Publier le commentaire
                  </button>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900 mr-2">Jean Dupont</h4>
                        <span className="text-sm text-gray-500">Il y a 2 heures</span>
                      </div>
                      <p className="text-gray-700">
                        Excellent article ! J'utilise déjà Next.js 14 et les performances sont 
                        vraiment impressionnantes. Merci pour ces conseils pratiques.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      AM
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-gray-900 mr-2">Alice Martin</h4>
                        <span className="text-sm text-gray-500">Il y a 5 heures</span>
                      </div>
                      <p className="text-gray-700">
                        Très instructif ! J'aimerais voir plus d'exemples concrets d'intégration 
                        de l'IA dans les projets web. Avez-vous des recommandations d'outils ?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sommaire
                </h3>
                <nav className="space-y-2">
                  <a href="#ai" className="block text-blue-600 hover:text-blue-700 text-sm">
                    1. L'IA au cœur du développement
                  </a>
                  <a href="#react" className="block text-blue-600 hover:text-blue-700 text-sm">
                    2. React et Next.js
                  </a>
                  <a href="#tailwind" className="block text-blue-600 hover:text-blue-700 text-sm">
                    3. Tailwind CSS
                  </a>
                  <a href="#typescript" className="block text-blue-600 hover:text-blue-700 text-sm">
                    4. TypeScript
                  </a>
                  <a href="#conclusion" className="block text-blue-600 hover:text-blue-700 text-sm">
                    5. Conclusion
                  </a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Articles similaires
                </h3>
                <div className="space-y-4">
                  <Link href="/posts/2" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                      Guide complet de React 2024
                    </h4>
                    <p className="text-xs text-gray-500">Il y a 3 jours</p>
                  </Link>
                  <Link href="/posts/3" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                      Optimiser ses performances web
                    </h4>
                    <p className="text-xs text-gray-500">Il y a 1 semaine</p>
                  </Link>
                  <Link href="/posts/4" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                      Les secrets du SEO moderne
                    </h4>
                    <p className="text-xs text-gray-500">Il y a 2 semaines</p>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">
                  Newsletter Tech
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Recevez les dernières actualités tech chaque semaine.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link href="/posts" className="flex items-center text-blue-600 hover:text-blue-700">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>
          <Link href="/posts/2" className="flex items-center text-blue-600 hover:text-blue-700">
            Article suivant
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
