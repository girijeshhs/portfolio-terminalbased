# Cyberpunk Terminal Portfolio

A futuristic, terminal-based portfolio website built with React, Vite, TypeScript, and Three.js.

## Features

- **Interactive Terminal**: Fully functional command-line interface with history, autocomplete, and typing effects.
- **Cyberpunk Aesthetic**: Neon glow, CRT scanlines, and glassy UI.
- **3D Background**: Immersive starfield animation using Three.js.
- **Responsive Design**: Works on desktop and mobile (with fallback UI).
- **Easter Eggs**: Try the `yuuichi_mode` command!

## Commands

- `help`: Show available commands.
- `about`: Display bio.
- `projects`: List projects.
- `projects <id>`: View project details.
- `skills`: List technical skills.
- `experience`: Show work history.
- `contact`: Display contact info.
- `resume`: View resume.
- `theme`: Toggle theme (Coming Soon).
- `clear`: Clear the terminal.

## Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

- **Content**: Edit `src/data/content.ts` to update your bio, projects, and skills.
- **Theme**: Modify `tailwind.config.js` and `src/index.css` to change colors.
- **Animations**: Adjust Framer Motion variants in components.

## Tech Stack

- React 18
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- Three.js / React Three Fiber
- Lucide React

## License

MIT
