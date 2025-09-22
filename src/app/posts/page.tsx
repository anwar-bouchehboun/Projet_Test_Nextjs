import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Données d'exemple pour les articles
const featuredArticle = {
  id: 1,
  title: "L'avenir de l'Intelligence Artificielle en 2024",
  excerpt: "Découvrez les tendances et innovations qui vont transformer notre façon de travailler et de vivre avec l'IA.",
  author: "Sophie Laurent",
  date: "15 Mars 2024",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  category: "Technologie",
  tags: ["IA", "Innovation", "Futur"]
}

const articles = [
  {
    id: 2,
    title: "Guide complet du développement React en 2024",
    excerpt: "Maîtrisez les dernières fonctionnalités de React et créez des applications modernes et performantes.",
    author: "Pierre Martin",
    date: "12 Mars 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Développement",
    tags: ["React", "JavaScript", "Web"]
  },
  {
    id: 3,
    title: "Stratégies marketing digital pour 2024",
    excerpt: "Les meilleures pratiques pour développer votre présence en ligne et attirer plus de clients.",
    author: "Marie Dubois",
    date: "10 Mars 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
    tags: ["SEO", "Social Media", "Strategy"]
  },
  {
    id: 4,
    title: "Design System : créer une identité cohérente",
    excerpt: "Comment développer et maintenir un design system efficace pour vos projets.",
    author: "Thomas Dupont",
    date: "8 Mars 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Design",
    tags: ["UI/UX", "Design", "Brand"]
  },
  {
    id: 5,
    title: "Productivité : les outils indispensables",
    excerpt: "Découvrez les applications et méthodes qui vont révolutionner votre workflow quotidien.",
    author: "Claire Rodriguez",
    date: "5 Mars 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    tags: ["Productivité", "Outils", "Workflow"]
  },
  {
    id: 6,
    title: "Entrepreneuriat : lancer sa startup en 2024",
    excerpt: "Les étapes clés pour transformer votre idée en entreprise prospère dans l'écosystème actuel.",
    author: "Lucas Moreau",
    date: "2 Mars 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business",
    tags: ["Startup", "Entrepreneuriat", "Business"]
  }
]

const categories = [
  { name: "Technologie", count: 24, color: "bg-blue-500" },
  { name: "Développement", count: 30, color: "bg-green-500" },
  { name: "Design", count: 15, color: "bg-purple-500" },
  { name: "Marketing", count: 21, color: "bg-orange-500" },
  { name: "Business", count: 18, color: "bg-red-500" },
  { name: "Lifestyle", count: 12, color: "bg-pink-500" }
]

export default function Posts() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos derniers articles sur la technologie, le développement, 
              le design et l'entrepreneuriat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Article à la une</h2>
            <Link href="/posts/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Écrire un article
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{featuredArticle.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.readTime} de lecture</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {featuredArticle.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/posts/${featuredArticle.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Lire l'article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Derniers articles</h2>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Plus récents</option>
                  <option>Plus populaires</option>
                  <option>Plus commentés</option>
                </select>
                <div className="flex border border-gray-300 rounded-lg">
                  <button className="px-3 py-2 bg-blue-50 text-blue-600 rounded-l-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-r-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/posts/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/posts/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Lire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
                  ← Précédent
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">2</button>
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">3</button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">10</button>
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
                  Suivant →
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Rechercher
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher des articles..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Catégories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/posts/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                        <span>{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({category.count})</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/posts/categories"
                  className="block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Voir toutes les catégories →
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">
                  Newsletter
                </h3>
                <p className="text-blue-100 mb-4">
                  Recevez nos derniers articles directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'JavaScript', 'AI', 'Design', 'SEO', 'Startup',
                    'TypeScript', 'Next.js', 'UI/UX', 'Marketing', 'Business', 'Tech'
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href={`/posts/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      #{tag}
                    </Link>
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