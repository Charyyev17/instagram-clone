/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#4cb5f9',
        facebook: '#385185',
        signup: '#00a2f8'
      },
      backgroundColor: {
        'modal-bg': 'rgba(0, 0, 0, .6)',
        'create-modal-bg': 'rgba(0, 0, 0, .4)',
        'story-next-bg': 'rgba(255, 255, 255, .9)'
      },
      backgroundImage: {
        'login-image-pattern': 'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)'
      },
    },
  },
  plugins: [],
}
