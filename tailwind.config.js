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
        'palette-grey-blue': '#B6D0D2',
        'palette-black': '#2A353E',
        'palette-orange': '#EB784B',    
        'palette-yellow': '#FFEC40',  
        'palette-purple': '#EB2FA0',
        'palette-grey': '#DFDFDF',
      },
      spacing: {
        '0.25': '1px',
      },
      backgroundImage: {
        'nature': "url('/images/interests/nature.jpg')",
        'tech': "url('/images/interests/tech.jpg')",
        'startup': "url('/images/interests/startup.jpg')",
        'french': "url('/images/interests/french.jpg')",
        'english': "url('/images/interests/english.jpg')",
        'spanish': "url('/images/interests/spanish.jpg')",
        'tennis': "url('/images/interests/tennis.jpg')",
        'cycling': "url('/images/interests/cycling.jpg')",
        'basquet': "url('/images/interests/basquet.jpg')",
      }
    },
  },
  plugins: [],
}
