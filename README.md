# Mina Hany - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a beautiful UI design.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient backgrounds
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Skills Visualization**: Animated skill bars showing proficiency levels
- **Project Showcase**: Beautiful project cards with hover effects
- **Contact Form**: Functional contact form for easy communication
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful icon library
- **CSS3** - Modern styling with gradients and glassmorphism effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the portfolio
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Personal Information

Update the following sections in `src/App.jsx`:

- **Personal Details**: Name, title, and description in the hero section
- **Skills**: Modify the `skills` array with your technical skills and proficiency levels
- **Experience**: Update the `experiences` array with your work history
- **Projects**: Customize the `projects` array with your portfolio projects
- **Contact Information**: Update contact details in the contact section

### Styling

- Colors and gradients can be modified in `src/App.css`
- Fonts can be changed by updating the Google Fonts import in `src/index.css`

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🎯 Sections

1. **Hero Section**: Introduction and call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technical skills with animated progress bars
4. **Experience**: Work history in timeline format
5. **Projects**: Portfolio projects with images and descriptions
6. **Contact**: Contact form and contact information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections

To add a new section:

1. Add the section to the `navItems` array
2. Create the section JSX in the App component
3. Add corresponding CSS styles
4. Update the scroll handling logic if needed

## 👤 About Mina Hany

Mina Hany is a passionate software engineer with expertise in modern web technologies. This portfolio showcases his skills, experience, and projects in an engaging and professional manner.

---

Built with ❤️ using React and Vite
