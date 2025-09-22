import React from 'react'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: "Technologie",
    slug: "technologie",
    description: "Les dernières innovations technologiques, développement web, IA et plus",
    count: 24,
    color: "bg-blue-500",
    icon: "💻"
  },
  {
    id: 2,
    name: "Business",
    slug: "business",
    description: "Stratégies d'entreprise, marketing, entrepreneuriat et tendances business",
    count: 18,
    color: "bg-green-500",
    icon: "📈"
  },
  {
    id: 3,
    name: "Design",
    slug: "design",
    description: "UI/UX, design graphique, tendances visuelles et créativité",
    count: 15,
    color: "bg-purple-500",
    icon: "🎨"
  },
  {
    id: 4,
    name: "Marketing",
    slug: "marketing",
    description: "Marketing digital, SEO, réseaux sociaux et stratégies de communication",
    count: 21,
    color: "bg-orange-500",
    icon: "📢"
  },
  {
    id: 5,
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Bien-être, productivité, développement personnel et équilibre vie-travail",
    count: 12,
    color: "bg-pink-500",
    icon: "🌟"
  },
  {
    id: 6,
    name: "Développement",
    slug: "developpement",
    description: "Tutoriels de programmation, frameworks, outils et bonnes pratiques",
    count: 30,
    color: "bg-indigo-500",
    icon: "⚡"
  }
]

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catégories d'articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos différentes catégories d'articles pour trouver le contenu qui vous intéresse
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-2xl mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} articles</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  href={`/posts/category/${category.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Voir les articles
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Statistiques des articles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">120</div>
              <div className="text-gray-600">Articles publiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Catégories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25k</div>
              <div className="text-gray-600">Vues totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1.2k</div>
              <div className="text-gray-600">Lecteurs actifs</div>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tags populaires
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'JavaScript', 'Next.js', 'TypeScript', 'Node.js', 
              'Python', 'UI/UX', 'SEO', 'Marketing Digital', 'Startup',
              'Freelance', 'Productivité', 'IA', 'Web3', 'DevOps'
            ].map((tag, index) => (
              <Link
                key={index}
                href={`/posts/tag/${tag.toLowerCase()}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Vous avez une idée d'article ?
            </h2>
            <p className="text-blue-100 mb-6">
              Rejoignez notre communauté d'auteurs et partagez vos connaissances
            </p>
            <Link
              href="/posts/create"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Écrire un article
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
