import React from 'react'
import Link from 'next/link'

// Données d'exemple pour les articles de la catégorie
const articles = [
  {
    id: 1,
    title: "Les tendances technologiques de 2024",
    excerpt: "Découvrez les innovations qui vont transformer le monde digital cette année.",
    author: "Marie Dubois",
    date: "15 Mars 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["IA", "Tech", "Innovation"]
  },
  {
    id: 2,
    title: "Intelligence Artificielle et Éthique",
    excerpt: "Comment concilier innovation technologique et responsabilité éthique dans le développement de l'IA.",
    author: "Pierre Martin",
    date: "12 Mars 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["IA", "Éthique", "Futur"]
  },
  {
    id: 3,
    title: "Le futur du développement web",
    excerpt: "Les frameworks et technologies qui façonnent l'avenir du développement web moderne.",
    author: "Sophie Laurent",
    date: "10 Mars 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Web", "Frontend", "React"]
  }
]

export default function TechnologieCategory() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link href="/posts" className="hover:text-blue-600">Articles</Link>
            <span>›</span>
            <Link href="/posts/categories" className="hover:text-blue-600">Catégories</Link>
            <span>›</span>
            <span className="text-gray-900">Technologie</span>
          </nav>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-3xl mr-6">
              💻
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Technologie
              </h1>
              <p className="text-xl text-gray-600">
                Les dernières innovations technologiques, développement web, IA et plus
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{articles.length} articles</span>
              <div className="flex space-x-2">
                {["IA", "Web", "Frontend", "Innovation"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Plus récents</option>
                <option>Plus populaires</option>
                <option>Plus anciens</option>
              </select>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-blue-50 text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime} de lecture</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/posts/${article.id}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {article.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/posts/${article.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Lire la suite →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  ← Précédent
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Suivant →
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Newsletter */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Newsletter Technologie
                </h3>
                <p className="text-gray-600 mb-4">
                  Recevez les dernières actualités tech directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Related Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Catégories similaires
                </h3>
                <div className="space-y-3">
                  <Link href="/posts/category/developpement" className="block text-gray-700 hover:text-blue-600">
                    Développement
                  </Link>
                  <Link href="/posts/category/design" className="block text-gray-700 hover:text-blue-600">
                    Design
                  </Link>
                  <Link href="/posts/category/business" className="block text-gray-700 hover:text-blue-600">
                    Business
                  </Link>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "AI", "JavaScript", "Python", "Next.js", "TypeScript"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
