const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-light": "rgba(244,244,244,1)",
        tertiary: {
          DEFAULT: "rgba(98,151,229 ,1)",
        },
      },
      keyframes: {
        "text-blink-anim": {
          "0%, 100%": { background: "transparent" },
          "50%": { background: "rgba(98,151,229 ,1)" },
        },
      },
      animation: {
        "text-blink":
          "text-blink-anim  1s step-end 0s infinite normal none running",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents }) {
      addBase({
        body: {
          // color: theme("colors.primary.DEFAULT"),
          // background: theme("colors.primary.DEFAULT"),
          margin: 0,
          // fontFamily: "var(--font-clash)",
        },
        "h1,h2,h3,h4,h5,h6": {
          // fontFamily: "var(--font-clash)",
          fontWeight: 400,
        },
        p: {
          // fontSize: "1.6rem",
        },
      });
      addComponents({
        ".hxl": {},
        ".hl": {},
        ".hm": {},
        ".hs": {},
        ".h1": {},
        ".h2": {},
        ".h3": {},
        ".h4": {},
        ".h5": {},
        ".h6": {},
        ".text-l": {},
        ".text-m": {},
        ".text-def": {},
        ".text-sm": {},
        ".site-container": {
          maxWidth: 1680,
          margin: "0 auto",
          width: "100%",
        },
      });
    }),
  ],
};
export default config;
