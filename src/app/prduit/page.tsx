import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Données des produits
const products = [
  {
    id: 1,
    name: "MacBook Pro 16'' M3",
    price: 2799,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Ordinateurs",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    description: "Ordinateur portable professionnel avec puce M3, écran Retina 16 pouces",
    features: ["Puce M3 Pro", "32GB RAM", "1TB SSD", "Écran Liquid Retina XDR"],
    inStock: true,
    discount: 12
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 1399,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Smartphones",
    rating: 4.9,
    reviews: 89,
    badge: "Nouveau",
    description: "Le smartphone le plus avancé d'Apple avec système de caméras Pro",
    features: ["Puce A17 Pro", "256GB", "Caméra 48MP", "Titane"],
    inStock: true,
    discount: null
  },
  {
    id: 3,
    name: "iPad Pro 12.9''",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Tablettes",
    rating: 4.7,
    reviews: 156,
    badge: "Promo",
    description: "Tablette professionnelle avec écran Liquid Retina XDR",
    features: ["Puce M2", "512GB", "12.9 pouces", "5G"],
    inStock: true,
    discount: 13
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    price: 279,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    rating: 4.6,
    reviews: 203,
    badge: "Promo",
    description: "Écouteurs sans fil avec suppression active du bruit",
    features: ["Réduction de bruit", "Audio spatial", "Boîtier MagSafe", "Résistant à l'eau"],
    inStock: true,
    discount: 15
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 449,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Montres",
    rating: 4.5,
    reviews: 78,
    badge: "Nouveau",
    description: "Montre connectée avec fonctionnalités de santé avancées",
    features: ["GPS + Cellulaire", "ECG", "Oxymèttre", "Résistant à l'eau"],
    inStock: false,
    discount: null
  },
  {
    id: 6,
    name: "Magic Mouse",
    price: 89,
    originalPrice: 109,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Accessoires",
    rating: 4.2,
    reviews: 45,
    badge: "Promo",
    description: "Souris sans fil avec surface Multi-Touch",
    features: ["Sans fil", "Multi-Touch", "Rechargeable", "Design compact"],
    inStock: true,
    discount: 18
  }
]

const categories = [
  { name: "Tous", count: 6, active: true },
  { name: "Ordinateurs", count: 1, active: false },
  { name: "Smartphones", count: 1, active: false },
  { name: "Tablettes", count: 1, active: false },
  { name: "Audio", count: 1, active: false },
  { name: "Montres", count: 1, active: false },
  { name: "Accessoires", count: 1, active: false }
]

export default function Produits() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Produits
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre sélection de produits technologiques de haute qualité, 
              soigneusement choisis pour vous offrir la meilleure expérience
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Trier par popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Meilleures notes</option>
                <option>Nouveautés</option>
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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover group">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  {product.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Nouveau' ? 'bg-green-500 text-white' :
                      product.badge === 'Promo' ? 'bg-red-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                  <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <Link
                      href={`/prduit/${product.id}`}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                    >
                      Voir détails
                    </Link>
                    {product.inStock && (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Ajouter au panier
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link href={`/prduit/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{product.features.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}€
                      </span>
                    )}
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-4">
                  {product.inStock ? (
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        En stock
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Ajouter au panier
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <span className="text-red-600 text-sm font-medium flex items-center justify-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Rupture de stock
                      </span>
                      <button className="w-full mt-2 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed" disabled>
                        Indisponible
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">8</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
              Suivant →
            </button>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé de nos nouveautés
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir en avant-première nos nouvelles arrivées, 
            promotions exclusives et conseils technologiques.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
