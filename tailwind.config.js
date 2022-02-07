module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-green': '#2FEB98',
        'palette-dark-green': '#419E75',
        'palette-cyan': '#4BDBEA',
        'palette-grey-blue': '#98CDD2',
        'palette-black': '#2A353E',
      },
      spacing: {
        '0.25': '1px',
      }
    },
  },
  plugins: [],
}
