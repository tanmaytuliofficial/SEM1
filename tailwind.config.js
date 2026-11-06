/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lovable: {
          bg: '#0B0D14',
          sidebar: '#0F121C',
          card: '#141724',
          cardHover: '#181C2B',
          border: '#1E2337',
          borderLight: '#282F48',
          text: '#F3F4F6',
          muted: '#8B92A7',
          accent: '#6366F1',
          accentHover: '#4F46E5',
          cyan: '#38BDF8',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
