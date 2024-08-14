/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#6C63FF",
        secondary: "#D7D5FF",
        tertiary: "#FFECC7",
        footer: "#F5F5F5",
      },
      fontSize: {
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        44: "44px",
      },
    },
  },
  plugins: [],
};
