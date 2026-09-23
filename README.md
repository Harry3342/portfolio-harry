# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Perfect for showcasing your projects, skills, and sharing your thoughts through a blog.

## Features

✨ **Modern Design** - Clean and professional UI with smooth animations
🌓 **Dark Mode** - Built-in dark mode toggle with localStorage persistence
📱 **Fully Responsive** - Works beautifully on all devices
🎨 **Tailwind CSS** - Utility-first CSS for rapid UI development
⚡ **Vite** - Lightning-fast build tool and development server
🚀 **React Router** - Smooth navigation between pages
📦 **Projects Showcase** - Display your best work with filtering
📝 **Blog Section** - Share your thoughts and tutorials
📧 **Contact Form** - Get in touch with visitors
💼 **About Section** - Highlight your skills and experience
⬇️ **Resume Download** - Let visitors download your CV

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with dark mode toggle
│   │   └── Footer.jsx         # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx           # Landing page with hero section
│   │   ├── About.jsx          # About page with skills
│   │   ├── Projects.jsx       # Projects showcase with filtering
│   │   ├── Blog.jsx           # Blog posts listing
│   │   └── Contact.jsx        # Contact form
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode context
│   ├── data/
│   │   └── sampleData.js      # Sample projects and blog posts
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Update Your Information

1. **Home Page**: Edit [src/pages/Home.jsx](src/pages/Home.jsx)
   - Change your name and headline
   - Update the profile emoji

2. **About Page**: Edit [src/pages/About.jsx](src/pages/About.jsx)
   - Modify your bio and skills
   - Update statistics

3. **Projects**: Edit [src/data/sampleData.js](src/data/sampleData.js)
   - Add your project details
   - Update images (use your own images)
   - Add GitHub and demo links

4. **Blog**: Edit [src/data/sampleData.js](src/data/sampleData.js)
   - Add your blog posts
   - Update categories and dates

5. **Contact**: Edit [src/pages/Contact.jsx](src/pages/Contact.jsx)
   - Update your email and phone
   - Modify location

6. **Social Links**: Update in [src/components/Footer.jsx](src/components/Footer.jsx)
   - Add your GitHub, LinkedIn, Twitter, etc.

### Dark Mode

Dark mode is automatically enabled based on system preferences and can be toggled via the theme button in the navbar. Preferences are saved to localStorage.

## Colors & Styling

- **Primary Color**: `#3B82F6` (Blue)
- **Theme**: Light and dark modes with Tailwind CSS
- **Font**: System fonts (-apple-system, BlinkMacSystemFont, etc.)

Customize colors in [tailwind.config.js](tailwind.config.js)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms

Build your project and deploy the `dist` folder to any static hosting service.

```bash
npm run build
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## Need Help?

- Check [Vite docs](https://vitejs.dev)
- Check [React docs](https://react.dev)
- Check [Tailwind CSS docs](https://tailwindcss.com)

---

**Made with ❤️ for developers**
