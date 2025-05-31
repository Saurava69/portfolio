# Saurav Kumar Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Animated sections using Framer Motion
- Interactive UI components
- Resume download functionality
- Contact form

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (for icons)
- React Intersection Observer

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
/
├── public/            # Static files
│   ├── favicon.svg
│   └── resume.pdf     # Your downloadable resume
├── src/
│   ├── components/    # React components
│   ├── context/       # React context providers
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Customization

### Personal Information

Update your personal information in the respective component files:

- `src/components/Hero.tsx` - Update your name, title, and introduction
- `src/components/About.tsx` - Update your about section
- `src/components/Experience.tsx` - Update your work experience
- `src/components/Projects.tsx` - Update your projects
- `src/components/Contact.tsx` - Update your contact information

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## Deployment

This project can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.


## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
