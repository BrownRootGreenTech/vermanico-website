# VERMANICO™ - Premium Organic Agricultural Products

A modern, responsive Next.js website for VERMANICO, an agricultural company specializing in organic vermicompost, eggshell powder, and fresh mushrooms.

## 🌱 Features

- **Modern Design**: Clean, aesthetic agricultural-themed design
- **Responsive**: Fully responsive layout that works on all devices
- **Product Categories**:
  - Vermicompost (1kg, 5kg, 10kg, and bulk options)
  - Eggshell Powder (500g, 1kg)
  - Fresh Mushrooms (Oyster & Button varieties)
- **Pages**:
  - Home page with hero section and featured products
  - Products page with category filtering
  - About page highlighting in-house facilities
  - Contact page with form and business information

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
vermanico-app/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── products/       # Products page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   └── ProductCard.tsx # Product display card
├── lib/
│   └── products.ts     # Product data and utilities
├── types/
│   └── product.ts      # TypeScript interfaces
└── public/             # Static assets
```

## 🎨 Color Palette

- **Primary Green**: For agricultural theme (#22c55e family)
- **Earth Tones**: For natural aesthetic (#78716c family)
- **Accent Colors**: Category-specific colors for visual distinction

## 📱 Pages Overview

### Home Page
- Hero section with company introduction
- Features showcase (100% Organic, In-House Production, Flexible Delivery)
- Featured products
- Why Choose Us section
- Call-to-action sections

### Products Page
- Category filtering (All, Vermicompost, Eggshell, Mushroom)
- Product grid with detailed cards
- Package size information

### About Page
- Company mission and vision
- Our story
- In-house facilities showcase
- Core values

### Contact Page
- Contact form
- Business information
- Office hours
- FAQ section

## 🛠️ Customization

### Adding New Products

Edit `lib/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  category: ProductCategory.VERMICOMPOST,
  description: 'Product description',
  features: ['Feature 1', 'Feature 2'],
  price: 150,
  unit: '1kg',
  image: '/products/image.jpg',
  inStock: true,
}
```

### Updating Contact Information

Update the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project can be deployed on:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js

### Deploy on Vercel

```bash
npm run build
vercel deploy
```

## 📄 License

Copyright © 2025 VERMANICO™. All rights reserved.

## 🤝 Support

For support or inquiries:
- Email: info@vermanico.com
- Phone: +91 123 456 7890

---

Built with ❤️ for sustainable agriculture
