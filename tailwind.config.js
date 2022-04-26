module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      hero:
        "url('https://images.wallpaperscraft.com/image/single/minimalism_gradient_dark_171946_1920x1200.jpg')",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};