import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
          950: 'rgb(var(--primary-950) / <alpha-value>)',
        },
        secondary: {
          50: '#eef3f7',
          100: '#dde7ef',
          200: '#ccdbe7',
          300: '#bbcfdf',
          400: '#aac3d7',
          500: '#99b7cf',
          600: '#88abc7',
          700: '#77a0bf',
          800: '#6694b7',
          900: '#234C6A', // Medium blue
          950: '#1a3a52',
        },
        accent: {
          50: '#f5f8fa',
          100: '#ebf1f5',
          200: '#e1eaf0',
          300: '#d7e3eb',
          400: '#cddce6',
          500: '#c3d5e1',
          600: '#b9cedc',
          700: '#afc7d7',
          800: '#a5c0d2',
          900: '#456882', // Muted blue
          950: '#354f62',
        },
        earth: {
          50: '#faf9f8',
          100: '#f5f3f1',
          200: '#efecea',
          300: '#eae6e3',
          400: '#e4dfdc',
          500: '#dfd9d5',
          600: '#d9d2ce',
          700: '#d4ccc7',
          800: '#cec5c0',
          900: '#D2C1B6', // Warm beige
          950: '#bfaea3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
