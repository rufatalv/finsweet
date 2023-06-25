/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      keyframes: {
        right: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        "moving-right": "right 1s ease 100ms infinite alternate forwards",
      },
      colors: {
        tintblue: "#1C1E53",
        darkblue: "#282938",
        royalblue: "#2405F2",
        yellow: "#FCD980",
        grey: "#F4F6FC",
        accent: "#EEF4FA",
        textblue: "#2405F2",
        texttint: "#1B1C2B",
        textyellow: "#FCD980",
        textgrey: "#BBBBCB",
      },
    },
  },
  plugins: [],
};
