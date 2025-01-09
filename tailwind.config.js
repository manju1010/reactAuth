module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', 
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
