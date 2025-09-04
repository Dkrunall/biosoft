# Wakse-Inspired Product Showcase Site - Technical Architecture Document

## 1. Architecture Design

```mermaid
graph TD
    A[User Browser] --> B[Static Next.js Application]
    B --> C[Static JSON Data Files]
    B --> D[External Form Services]
    
    subgraph "Frontend Layer"
        B
        E[React Components]
        F[Static Assets]
        G[Tailwind CSS]
    end
    
    subgraph "Data Layer"
        C
        H[Products JSON]
        I[Categories JSON]
    end
    
    subgraph "External Services"
        D
        J[Formspree/Netlify Forms]
        K[Email Notifications]
    end
```

## 2. Technology Description

* **Frontend**: Next.js\@14 + React\@18 + TypeScript + Tailwind CSS\@3 + Framer Motion

* **Data Storage**: Static JSON files for products, categories, and content

* **Forms**: Formspree or Netlify Forms for contact and inquiry submissions

* **Email**: Form service handles email notifications automatically

* **Deployment**: Vercel, Netlify, or GitHub Pages for static hosting

## 3. Route Definitions

| Route             | Purpose                                                             |
| ----------------- | ------------------------------------------------------------------- |
| /                 | Homepage with hero sections, category grid, and promotional content |
| /products         | Product catalog page with filters and search functionality          |
| /products/\[slug] | Individual product detail page with information and inquiry forms   |
| /contact          | Contact page with inquiry forms and business information            |
| /about            | Brand story, company information, and team details                  |
| /account          | User dashboard for inquiry history and profile management           |
| /account/inquiries| Inquiry tracking and communication history                          |
| /account/favorites| Saved products and favorites                                        |
| /login            | User authentication and registration                                |
| /register         | New user account creation                                           |
| /wholesale        | Wholesale information and bulk inquiry forms                        |
| /blog             | Educational content and product usage guides                        |

## 4. Static Data Structure

### 4.1 JSON Data Files

**Products Data (data/products.json)**

```json
{
  "products": [
    {
      "id": "product-1",
      "name": "Premium Hard Wax Beans",
      "slug": "premium-hard-wax-beans",
      "description": "Professional-grade hard wax beans for salon-quality results at home",
      "ingredients": "Natural rosin, beeswax, coconut oil",
      "benefits": ["Gentle on sensitive skin", "Long-lasting results", "Easy to use"],
      "images": ["/images/products/wax-beans-1.jpg", "/images/products/wax-beans-2.jpg"],
      "category": "hard-wax-beans",
      "variants": [
        {"name": "Chocolate", "color": "#8B4513"},
        {"name": "Honey", "color": "#FFD700"}
      ]
    }
  ]
}
```

**Categories Data (data/categories.json)**

```json
{
  "categories": [
    {
      "id": "hard-wax-beans",
      "name": "Hard Wax Beans",
      "slug": "hard-wax-beans",
      "description": "Premium hard wax beans for professional results",
      "icon": "wax-bean",
      "sortOrder": 1
    }
  ]
}
```

**Contact Form Integration**

Forms submit directly to external services:
- Formspree: `https://formspree.io/f/{form-id}`
- Netlify Forms: Built-in form handling with `netlify` attribute
- No server-side processing required

## 5. Static Site Architecture

```mermaid
graph TD
    A[Next.js Static Generation] --> B[Static HTML/CSS/JS]
    B --> C[CDN/Static Hosting]
    C --> D[User Browser]
    
    subgraph "Build Time"
        A
        E[JSON Data Processing]
        F[Static Asset Optimization]
    end
    
    subgraph "Runtime"
        D
        G[Client-side Interactions]
        H[Form Submissions]
    end
    
    subgraph "External Services"
        I[Form Processing Service]
        J[Email Notifications]
    end
    
    H --> I
    I --> J
```

## 6. Static Data Structure

### 6.1 File Organization

```
data/
├── products.json          # All product information
├── categories.json        # Product categories
├── content.json          # Static content (hero sections, testimonials)
└── settings.json         # Site configuration

public/
├── images/
│   ├── products/         # Product images
│   ├── heroes/           # Hero section backgrounds
│   └── icons/            # Category and UI icons
└── favicon.ico
```

### 6.2 Data Relationships

```mermaid
graph TD
    A[categories.json] --> B[products.json]
    B --> C[Product Variants]
    D[content.json] --> E[Hero Sections]
    D --> F[Testimonials]
    G[settings.json] --> H[Site Configuration]
    
    subgraph "Static Files"
        A
        B
        D
        G
    end
    
    subgraph "Generated Content"
        C
        E
        F
        H
    end
```

### 6.3 Sample Data Structure

**Complete Products Data Example**

```json
{
  "products": [
    {
      "id": "hard-wax-chocolate",
      "name": "Chocolate Hard Wax Beans",
      "slug": "chocolate-hard-wax-beans",
      "description": "Premium chocolate-scented hard wax beans for professional at-home hair removal",
      "ingredients": "Natural rosin, beeswax, coconut oil, cocoa extract",
      "usageInstructions": "Heat to 65°C, apply against hair growth, remove with quick motion",
      "benefits": [
        "Gentle on sensitive skin",
        "Long-lasting smooth results",
        "Pleasant chocolate scent",
        "Professional salon quality"
      ],
      "images": [
        "/images/products/chocolate-wax-main.jpg",
        "/images/products/chocolate-wax-lifestyle.jpg",
        "/images/products/chocolate-wax-ingredients.jpg"
      ],
      "category": "hard-wax-beans",
      "featured": true,
      "variants": [
        {
          "name": "Small (100g)",
          "sku": "CHW-100",
          "attributes": {"weight": "100g", "color": "#8B4513"}
        },
        {
          "name": "Large (500g)",
          "sku": "CHW-500",
          "attributes": {"weight": "500g", "color": "#8B4513"}
        }
      ]
    }
  ]
}
```

**Content Management Example**

```json
{
  "heroSections": [
    {
      "id": "main-hero",
      "title": "Game-Changing Hair Removal Products",
      "subtitle": "At-home waxing has never been more affordable!",
      "backgroundImage": "/images/heroes/main-hero-bg.jpg",
      "ctaText": "SHOP NOW",
      "ctaLink": "/products"
    }
  ],
  "taglines": [
    "🐒 made by two hairy guys. 🦍",
    "Save time and money taking care of the hair at home!"
  ],
  "testimonials": [
    {
      "text": "Best wax I've ever used!",
      "author": "@beautyqueen",
      "image": "/images/testimonials/user1.jpg"
    }
  ]
}
```

**Site Configuration**

```json
{
  "site": {
    "name": "Wakse",
    "tagline": "Premium Hair Removal Products",
    "contactEmail": "hello@wakse.com",
    "socialMedia": {
      "instagram": "@wakse",
      "tiktok": "@wakse"
    }
  },
  "forms": {
    "contactFormEndpoint": "https://formspree.io/f/your-form-id",
    "newsletterEndpoint": "https://formspree.io/f/your-newsletter-id"
  },
  "features": {
    "freeShippingThreshold": 25,
    "currency": "USD"
  }
}
```

