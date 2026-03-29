/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base (Inspirado no visual limpo)
        base: '#24273a', // Macchiato Base (Fundo principal)
        mantle: '#1e2030', // Macchiato Mantle (Card background)
        text: '#cad3f5', // Macchiato Text

        // Cores de Destaque (Inspiradas na Turma do Bem)
        accent: '#c6a0f6', // Mauve (Para botões principais/links)
        success: '#a6da95', // Green (Para o sorriso final)
        warning: '#eed49f', // Yellow (Para alertas de cadastro)
        
        // Cores secundárias da paleta Catppuccin
        teal: '#8bd5ca',
        peach: '#f5a97f',
      },
      borderRadius: {
        'apple': '12px', // Cantos arredondados estilo Apple
        'apple-lg': '20px',
      },
      fontFamily: {
        // Tente usar uma fonte Sans-serif limpa como Inter
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}