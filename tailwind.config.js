/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center : true,
      padding : '16px',
    },
    colors: {
      primary: '#03989E',
      darkprimary : '#244243',
      dark: '#2E2E2E',
      darksecond: '#555555',
      primarylight: '#79DBA3',
      lightsecond: '#F7F7F7',
      light : '#ffffff'
    },
  },
  plugins: [],
}