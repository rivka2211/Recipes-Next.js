# My Recipes App 🍴

A modern Hebrew recipe sharing application built with Next.js, featuring a clean UI and seamless content management.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentful for content management
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel/Netlify

## Features

- 📱 Responsive design with RTL support
- 🌙 Dark/Light theme toggle
- 🔍 Real-time recipe search
- 📝 Dynamic recipe pages
- 🎨 Clean, accessible UI
- 📊 Type-safe data handling

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── recipe/[id]/       # Dynamic recipe pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── data/                  # Static data (fallback)
├── types/                 # TypeScript definitions
└── lib/                   # Contentful integration
```

## Key Technologies

### Frontend Architecture
- **Next.js App Router**: Server-side rendering and static generation
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with dark mode support

### Content Management
- **Contentful CMS**: Headless content management for easy recipe updates
- **Static JSON fallback**: Backup data source for development

### UI Components
- Client-side search with real-time filtering
- Theme toggle with localStorage persistence
- Responsive grid layout
- Hebrew RTL text direction support

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your Contentful credentials
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token

# Run development server
npm run dev
```

## Development

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## Environment Variables

```env
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

## API Routes

- `GET /api/recipes` - Fetch all recipes
- `GET /api/recipe/[id]` - Fetch specific recipe

## Content Model (Contentful)

```typescript
interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image?: {
    url: string;
    title?: string;
    description?: string;
  };
  categories?: string[];
  publishDate?: string;
}
```

## Performance Features

- Server-side rendering for SEO
- Image optimization with Next.js Image component
- Static generation for recipe pages
- Efficient client-side filtering

## Browser Support

- Modern browsers with ES2020+ support
- Mobile-first responsive design
- Hebrew/RTL text support
