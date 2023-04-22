/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cyber': ['Cyberpunk'],
        'valo': ["Valo"],
        'mono': ["Courier New"],
      },
      backgroundImage: {
        'defaulticon': "url('/public/profilepictures/default_profilepic.png')",
        'eyeicon': "url('/public/profilepictures/eye_profile.png')",
        'glassesicon': "url('/public/profilepictures/glasses_profile.png')",
        'grizicon': "url('/public/profilepictures/griz_profile.png')",
        'imgicon': "url('/public/profilepictures/img_profile.png')",
        'maskicon': "url('/public/profilepictures/mask_profilepic.png')",
        'angyicon': "url('/public/profilepictures/angy_profilepic.png')",
      }
    },
  },
  plugins: [],
}