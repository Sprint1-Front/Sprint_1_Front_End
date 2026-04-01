/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#24273a',
        mantle: '#1e2030', 
        text: '#cad3f5', 

        accent: '#c6a0f6', 
        success: '#a6da95', 
        warning: '#eed49f',
        

        teal: '#8bd5ca',
        peach: '#f5a97f',
      },
      borderRadius: {
        'apple': '12px',
        'apple-lg': '20px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}