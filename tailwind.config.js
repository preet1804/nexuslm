/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF9F6',
          100: '#F7F5F0', // Primary background
          200: '#EFECE4',
          300: '#E4DFD5',
        },
        charcoal: {
          900: '#17191B', // Primary text
          950: '#171A1D', // Dark section background
          800: '#232629',
          700: '#34383C',
          600: '#66686A', // Secondary text
          500: '#929292', // Muted text
          400: '#A9A99F', // Accent
          200: '#DCDAD4', // Primary border
          100: '#EBE9E3',
        },
        nexus: {
          bg: '#F7F5F0',
          card: '#FFFFFF',
          text: '#17191B',
          secondary: '#66686A',
          muted: '#929292',
          border: '#DCDAD4',
          dark: '#171A1D',
          darkText: '#F7F5F0',
          accent: '#A9A99F',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Manrope', 'Montserrat', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'nexus-sm': '8px',
        'nexus-md': '12px',
        'nexus-lg': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(23, 25, 27, 0.05), 0 1px 2px rgba(23, 25, 27, 0.03)',
        'card': '0 4px 20px -2px rgba(23, 25, 27, 0.04), 0 2px 6px -1px rgba(23, 25, 27, 0.02)',
        'elevated': '0 12px 32px -4px rgba(23, 25, 27, 0.08), 0 4px 12px -2px rgba(23, 25, 27, 0.03)',
      }
    },
  },
  plugins: [],
}

