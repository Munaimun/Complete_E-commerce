# Frontend Development Guide

## Setup

1. **Install Dependencies**
```bash
cd client
npm install
```

2. **Environment Setup**
```bash
# .env (development)
VITE_SERVER=http://localhost:8000

# .env.production (production)
VITE_SERVER=https://complete-e-commerce-backend.vercel.app
```

3. **Start Development Server**
```bash
npm run dev
```

Open `http://localhost:5173`

## Project Structure

- **components/**: Reusable UI components
- **pages/**: Full page components
- **hooks/**: Custom React hooks
- **services/**: API calls (axios wrappers)
- **context/**: Global state management
- **types/**: TypeScript interfaces
- **utils/**: Helper functions
- **constants/**: App constants

## Key Files

- `src/App.tsx` - Main app component
- `src/main.tsx` - Entry point
- `src/context/UserContext.tsx` - User authentication state
- `src/services/` - API communication layer
- `vite.config.ts` - Vite bundler configuration

## Adding a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `RouterLayout.tsx`
3. Add navigation link in Header

## Adding a New Component

1. Create in `src/components/[category]/NewComponent.tsx`
2. Export from `src/components/index.ts`
3. Import and use in pages

## Code Style
```bash
npm run prettier  # Format code
npm run lint      # Check linting
```

## Building for Production
```bash
npm run build     # Creates dist/ folder
npm run preview   # Preview production build
```
