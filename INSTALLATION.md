# Installation Guide for VERMANICO™ Website

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm (comes with Node.js)

## Step-by-Step Installation

### 1. Fix npm Permissions (if needed)

If you encountered permission issues, run:

```bash
sudo chown -R 501:20 "/Users/zodiac25/.npm"
```

### 2. Navigate to Project Directory

```bash
cd /Users/zodiac25/Documents/test/verminico/vermanico-app
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- All development dependencies

### 4. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

When ready to deploy:

```bash
npm run build
```

### 6. Start Production Server

```bash
npm start
```

## Verify Installation

After running `npm run dev`, you should be able to access:

- **Homepage**: http://localhost:3000
- **Products**: http://localhost:3000/products
- **About**: http://localhost:3000/about
- **Contact**: http://localhost:3000/contact

## Common Issues

### Issue: Port 3000 already in use

**Solution**: Use a different port:
```bash
PORT=3001 npm run dev
```

### Issue: Module not found errors

**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: TypeScript errors

**Solution**: Ensure TypeScript is installed:
```bash
npm install --save-dev typescript @types/react @types/node
```

## Project Features

✅ Fully typed with TypeScript
✅ Responsive design (mobile, tablet, desktop)
✅ SEO optimized with metadata
✅ Modern UI with Tailwind CSS
✅ Modular and maintainable code structure
✅ Production-ready configuration

## Next Steps

1. **Customize Content**: Update product information in `lib/products.ts`
2. **Add Images**: Place product images in `public/products/` directory
3. **Update Contact Info**: Modify contact details in Footer and Contact page
4. **Configure Domain**: Update metadata in `app/layout.tsx` with your domain
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## Development Tips

- The app uses Next.js App Router (not Pages Router)
- All pages are in the `app/` directory
- Reusable components are in `components/` directory
- Use `npm run lint` to check for code issues
- TypeScript strict mode is enabled for type safety

## Support

If you encounter any issues during installation, please check:
1. Node.js version: `node --version` (should be 18.x or higher)
2. npm version: `npm --version`
3. Check console errors for specific issues

Happy developing! 🌱
