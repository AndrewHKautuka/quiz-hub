# QuizHub

A comprehensive quiz management system that enables educators to create and manage quizzes while allowing students to take assessments and view their results.

## Features

- 🔐 Secure authentication with email/password and OAuth
- 👤 Role-based access control (Student/Admin)
- 📝 Quiz creation and management for educators
- 🧠 True/false and multiple-choice question support
- ⏱️ Timed quiz sessions with enforced timeframes
- 🤖 Automated quiz marking with immediate feedback
- 📊 Results tracking and analytics
- 📱 Responsive design across devices
- ♿ WCAG 2.1 accessibility compliance

## Technology Stack

### Frontend

- React 18+ with TypeScript
- Material-UI (MUI) component library
- React Router v7 (framework mode)
- React Hook Form with Yup validation
- Vite for fast builds and development

### Backend

- Supabase Backend-as-a-Service
    - Authentication with JWT sessions
    - PostgreSQL database
    - Row-level security
    - Object storage
- C# with ASP.NET Core (for extended features)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager installed (`npm install -g pnpm`)
- Supabase account (for backend services)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/quiz-hub.git
cd quiz-hub
pnpm install
```

### Configuration

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Start the development server with hot module replacement:

```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`.

### Type Checking

Run TypeScript type checking:

```bash
pnpm run typecheck
```

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

The application is configured for deployment on Netlify:

```bash
pnpm run build
netlify deploy --prod
```

## Project Structure

- `/app` - Application source code
    - `/routes` - Route components and handlers
    - `/components` - Reusable UI components
    - `/hooks` - Custom React hooks
    - `/utils` - Helper functions and utilities
- `/server` - Backend API extensions
- `/public` - Static assets
