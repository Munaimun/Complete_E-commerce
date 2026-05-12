# Deployment Guide

## Backend Deployment (Vercel)

### Prerequisites
- Vercel account
- Git repository

### Steps

1. **Connect to Vercel**
```bash
npm install -g vercel
vercel login
```

2. **Deploy**
```bash
vercel deploy
```

3. **Environment Variables**
Set these in Vercel dashboard:
- `DB_HOST` - MySQL host
- `DB_USER` - MySQL user
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - Database name
- `JWT_SECRET` - JWT signing secret
- `ADMIN_SETUP_KEY` - Admin bootstrap key

### Database
Use a managed MySQL service (Planetscale, AWS RDS, etc)

## Frontend Deployment (Vercel)

1. **Connect Vercel to your GitHub repo**
2. **Select client folder as root**
3. **Set build command**: `npm run build`
4. **Set output directory**: `dist`
5. **Add environment variables**:
   - `VITE_SERVER` - Backend API URL

## Monitoring
- Use Vercel Analytics for performance
- Monitor database query times
- Set up error tracking (Sentry, LogRocket)
