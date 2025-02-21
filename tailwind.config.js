/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],       
        inconsolata: ['Inconsolata', 'monospace'],
      }
    },
  },
  plugins: [],
};
