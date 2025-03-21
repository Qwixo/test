/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-aqua': '#00A79D',
        'light-aqua': '#30EBD6',
        'dark-gray': '#363636',
        'dark-blue': '#242F40',
        'black': '#000000',
        'light-bg': '#F8F8F8',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}
