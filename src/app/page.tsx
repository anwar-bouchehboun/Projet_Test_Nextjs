import React from 'react'
import PhotoSlider from '@/components/PhotoSlider'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec Slider */}
      <PhotoSlider />
      
      {/* Section Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous développons des solutions innovantes pour répondre aux défis de demain.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Des solutions rapides et efficaces pour optimiser votre productivité.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">
                Protection maximale de vos données avec nos technologies de pointe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                À propos de nous
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous sommes une équipe passionnée de professionnels dédiés à l'excellence. 
                Avec plus de 10 ans d'expérience, nous avons aidé des centaines d'entreprises 
                à atteindre leurs objectifs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Notre approche combine innovation technologique et expertise métier pour 
                créer des solutions sur mesure qui répondent parfaitement à vos besoins.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                En savoir plus
              </button>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Notre équipe"
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
            comment nous pouvons vous aider à réussir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Nous contacter
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Voir nos projets
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
