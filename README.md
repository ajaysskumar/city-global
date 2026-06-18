# City Global - Photography Portfolio

A modern photography portfolio website built with React and Vite, designed to showcase wedding and event photography services.

## Features

- **Hero Section**: Eye-catching landing area with call-to-action
- **Service Categories**: Display of all photography services (Wedding, Engagement, Maternity, Birthdays, Baby Shoot, Pre-Wedding)
- **Photo Gallery**: Portfolio showcase with hover effects
- **Team Information**: Meet the photographers section
- **Contact Form**: Get in touch with the team
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **GitHub Pages Ready**: Pre-configured for easy deployment

## Tech Stack

- **React 18**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing (ready for expansion)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/city-global.git
cd city-global
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Development

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Deployment to GitHub Pages

1. Update the `homepage` in `package.json`:
```json
"homepage": "https://your-username.github.io/city-global"
```

2. Make sure you have `gh-pages` installed (included in dependencies)

3. Deploy:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch. Enable GitHub Pages in your repository settings to serve from the `gh-pages` branch.

## Project Structure

```
city-global/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Adding Images

Replace the placeholder gallery items in `src/components/Gallery.jsx` with actual images:

```jsx
<div className="bg-cover bg-center" style={{backgroundImage: `url('/path/to/image.jpg')`}}>
```

### Updating Content

Edit the relevant component files in `src/components/` to update:
- Hero headline and CTA
- Service descriptions
- Team member information
- Contact details

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

## License

MIT License - feel free to use this for your portfolio!

## Support

For questions or issues, create a GitHub issue or contact through the contact form.
