/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      dark: "#100f10",
      "dark-grey": '#1b1b1b',
      "light-grey": "#242424", 
      "light-green": "#34d399",
      "dark-green": "#065f46",
      "text-white": "#fff",
      "text-grey": "#0f172a",
     },
     fontFamily: {
      inter: ['var(--font-inter)'],
      jost: ['var(--font-jost)'],
      righteous: ['var(--font-righteous)'],
      "permanent_marker": ['var(--font-permanent_marker)']
     },
     boxShadow: {
      "user-select-shadow": "0px 0px 2px 2px #1d8e66",
      "services-card": "0px 0px 10px 8px #f9f9f9",
      "match-card": "0px 2px 6px 6px rgba(0, 0, 0, 0.3)",
    },
    },
  },
  plugins: [],
}
