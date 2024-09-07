/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',      // Corresponds to --primary-color
        secondary: '#2ecc71',    // Corresponds to --secondary-color
        background: '#84e2f0',   // Corresponds to --background-color
        text: '#2c3e50',         // Corresponds to --text-color
        card: '#ffffff',         // Corresponds to --card-background
        accent: '#e74c3c',       // Corresponds to --accent-color
        shadow: 'rgba(0, 0, 0, 0.1)',  // Corresponds to --shadow-color
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'custom-light': '2px 2px 4px rgba(0, 0, 0, 0.1)', // Corresponds to shadow effect
      },
    },
  },
  plugins: [],
};
