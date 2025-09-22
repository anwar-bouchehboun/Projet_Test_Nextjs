# MonSite - Site Web Professionnel

Un site web moderne et responsive créé avec Next.js et Tailwind CSS, featuring un design professionnel avec navbar interactive, slider de photos, système d'authentification et gestion d'articles.

## 🚀 Fonctionnalités

### 🎨 Interface Utilisateur
- **Design Responsive** : Optimisé pour tous les appareils (mobile, tablet, desktop)
- **Navbar Interactive** : Navigation moderne avec menu déroulant et menu mobile
- **Slider de Photos** : Carousel automatique avec des images de haute qualité
- **Footer Complet** : Informations de contact et liens sociaux
- **Animations CSS** : Effets de transition fluides et animations personnalisées

### 🔐 Système d'Authentification
- **Page de Connexion** : Interface moderne avec validation
- **Page d'Inscription** : Formulaire complet avec confirmation de mot de passe
- **Mot de Passe Oublié** : Système de récupération de mot de passe
- **Connexion Sociale** : Boutons Google et Facebook
- **Design Sécurisé** : Informations de sécurité et politique de confidentialité

### 📝 Gestion d'Articles
- **Menu Déroulant Posts** : Navigation avancée avec options multiples
- **Création d'Articles** : Éditeur complet avec support Markdown
- **Catégories** : Système de classification avec 6 catégories
- **Tags** : Système de tags pour organisation fine
- **Pages Catégories** : Affichage filtré par catégorie
- **SEO Optimisé** : Champs meta et descriptions

## 🛠️ Technologies Utilisées

- **Next.js 14** - Framework React avec SSR et App Router
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **TypeScript** - Typage statique pour JavaScript
- **React Hooks** - Gestion d'état moderne (useState, useEffect, useRef)
- **Next Image** - Optimisation automatique des images

## 📁 Structure du Projet

```
src/
├── app/
│   ├── layout.tsx              # Layout principal avec navbar et footer
│   ├── page.tsx                # Page d'accueil avec slider et sections
│   ├── globals.css             # Styles CSS globaux et animations
│   ├── about/page.tsx          # Page à propos
│   ├── posts/
│   │   ├── page.tsx            # Liste des articles
│   │   ├── first/page.tsx      # Premier article
│   │   ├── create/page.tsx     # Création d'article
│   │   ├── categories/page.tsx # Liste des catégories
│   │   └── category/[slug]/page.tsx # Articles par catégorie
│   ├── prduit/page.tsx         # Page produits
│   ├── profile/page.tsx        # Page profil
│   ├── signin/page.tsx         # Page de connexion
│   ├── signup/page.tsx         # Page d'inscription
│   └── forgot-password/page.tsx # Récupération mot de passe
└── components/
    ├── Navbar.tsx              # Barre de navigation avec dropdown
    ├── PhotoSlider.tsx         # Slider de photos avec auto-rotation
    └── Footer.tsx              # Footer avec informations de contact
```

## 🎨 Design Features

### Navbar Avancée
- Logo personnalisé "MonSite"
- Menu déroulant pour "Posts" avec 4 options :
  - Tous les articles
  - Premier article
  - Créer un article
  - Catégories
- Menu responsive avec hamburger sur mobile
- Liens d'authentification (Connexion/Inscription)
- Fermeture automatique du dropdown

### Photo Slider
- Rotation automatique toutes les 5 secondes
- Navigation manuelle avec flèches
- Indicateurs de slide (dots)
- 3 slides avec contenu différent
- Overlay avec texte et boutons call-to-action
- Gestion des erreurs d'images externes

### Pages d'Authentification
- **Page de Connexion** :
  - Formulaire avec email/mot de passe
  - Checkbox "Se souvenir de moi"
  - Lien mot de passe oublié
  - Connexion sociale (Google/Facebook)
  - Design gradient bleu

- **Page d'Inscription** :
  - Formulaire complet (nom, prénom, email, mot de passe)
  - Confirmation de mot de passe
  - Acceptance des conditions
  - Connexion sociale
  - Design gradient vert
  - Section sécurité

- **Mot de Passe Oublié** :
  - Interface simple et claire
  - Instructions détaillées
  - Design gradient violet
  - Lien retour connexion

### Système d'Articles
- **Création d'Articles** :
  - Éditeur riche avec support Markdown
  - Upload d'image de couverture
  - Sélection de catégorie
  - Système de tags
  - Optimisation SEO
  - Actions multiples (brouillon, prévisualisation, publication)

- **Catégories** :
  - 6 catégories avec icônes et couleurs
  - Statistiques d'articles
  - Compteurs par catégorie
  - Tags populaires
  - Section call-to-action

- **Pages par Catégorie** :
  - Fil d'ariane (breadcrumb)
  - Filtrage et tri
  - Vue grille/liste
  - Sidebar avec newsletter et tags
  - Pagination

## 🚀 Pages Disponibles

### Pages Principales
- `/` - Page d'accueil avec slider
- `/about` - À propos
- `/prduit` - Produits
- `/profile` - Profil utilisateur

### Authentification
- `/signin` - Page de connexion
- `/signup` - Page d'inscription
- `/forgot-password` - Récupération mot de passe

### Articles & Blog
- `/posts` - Liste des articles
- `/posts/first` - Premier article
- `/posts/create` - Créer un article
- `/posts/categories` - Liste des catégories
- `/posts/category/[slug]` - Articles par catégorie

## 🎯 Configurations Importantes

### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
```

### Tailwind CSS
- Animations personnalisées
- Classes utilitaires custom
- Effets hover et transitions
- Responsive design mobile-first

## 🚀 Démarrage Rapide

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Lancement du serveur de développement**
   ```bash
   npm run dev
   ```

3. **Accès au site**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## � Personnalisation

### Modifier les Slides
Éditez le fichier `src/components/PhotoSlider.tsx` :
```javascript
const slides = [
  {
    id: 1,
    title: "Votre Titre",
    subtitle: "Votre Description",
    image: "URL_de_votre_image",
    buttonText: "Votre Bouton"
  }
  // ... autres slides
]
```

### Ajouter des Catégories
Modifiez `src/app/posts/categories/page.tsx` :
```javascript
const categories = [
  {
    name: "Nouvelle Catégorie",
    slug: "nouvelle-categorie",
    description: "Description de la catégorie",
    count: 0,
    color: "bg-your-color",
    icon: "🎯"
  }
]
```

### Personnaliser les Couleurs
Dans `tailwind.config.ts`, ajoutez vos couleurs personnalisées.

## 🔧 Fonctionnalités Avancées

- **Dropdown Navigation** : Menu déroulant avec React hooks
- **Click Outside Detection** : Fermeture automatique des menus
- **Image Optimization** : Configuration Next.js pour images externes
- **Responsive Design** : Mobile-first avec Tailwind CSS
- **TypeScript** : Typage complet pour la robustesse du code
- **Animations CSS** : Keyframes personnalisées et transitions fluides

## 🚀 Production

Pour construire le projet pour la production :

```bash
npm run build
npm start
```

## 📄 License

Ce projet est sous licence MIT.

---

Créé avec ❤️ par l'équipe de développement

## 🆕 Nouvelles Fonctionnalités

### v2.0 - Système d'Authentification et Blog
- ✅ Pages de connexion et inscription
- ✅ Système de récupération de mot de passe
- ✅ Navigation avec menu déroulant
- ✅ Système de création d'articles
- ✅ Gestion des catégories et tags
- ✅ Pages par catégorie avec pagination
- ✅ Interface d'administration basique

### À Venir
- 🔲 Base de données et backend
- 🔲 Authentification réelle
- 🔲 Système de commentaires
- 🔲 Dashboard administrateur
- 🔲 API REST pour les articles
