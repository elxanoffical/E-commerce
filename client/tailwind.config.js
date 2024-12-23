/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Konteynerin mərkəzə düzülməsi
        padding: '2rem', // Daxili boşluq (padding)
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      color: {
        primary: {
          100: "#F0F1FF",
          200: "#E3E5FF",
          300: "#B7BFFF",
          400: "#A8B2FF",
          500: "#97A6FF",
          600: "#869AFF",
          700: "#728FFF",
          800: "#5C83FF",
          900: "#4078FF",
        },
        neutral: {
          100: "#E6E7E8",
          200: "#B6B7BC",
          300: "#878A92",
          400: "#71747E",
          500: "#5C5F6A",
          600: "#474B57",
          700: "#333845",
          800: "#202533",
          900: "#0E1422",
        },
        green: {
          100: "#D5E5D7",
          200: "#C1D8C4",
          300: "#98BE9E",
          400: "#83B18B",
          500: "#6FA479",
          600: "#5A9868",
          700: "#458B56",
          800: "#2C7F45",
          900: "#057234",
        },
        red: {
          100: "#FBD9D0",
          200: "#F8C5B9",
          300: "#EE9F8D",
          400: "#E88C77",
          500: "#E17862",
          600: "#D9644E",
          700: "#D14F3A",
          800: "#C83727",
          900: "#BE1313",
        },
        yellow: {
          100: "#FFF1D8",
          200: "#FFEAC4",
          300: "#FFDC9E",
          400: "#FFD58A",
          500: "#FDCF76",
          600: "#FBC862",
          700: "#F9C14C",
          800: "#F6BB33",
          900: "#F3B40A",
        },
      },
    },
  },
  plugins: [],
};
