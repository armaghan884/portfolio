/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010a10",
        secondary: "#fff",
        tertiary: "#021929",
        "black-100": "#021929",
        "black-200": "#4d8aa3",
        "white-100": "#f3f3f3",
        "custom-blue": "#7ad9ff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.hide-vertical-scrollbar': {
            'overflow-y': 'scroll',
            'scrollbar-width': 'none !important',  /* Firefox */
            'ms-overflow-style': 'none !important',  /* IE and Edge */
          },
          '.hide-vertical-scrollbar::-webkit-scrollbar': {
            'display': 'none !important',
          },
          '.hide-horizontal-scrollbar': {
            'overflow-x': 'scroll',
            'scrollbar-width': 'none !important',  /* Firefox */
            'ms-overflow-style': 'none !important',  /* IE and Edge */
          },
          '.hide-horizontal-scrollbar::-webkit-scrollbar': {
            'display': 'none !important',
          },
        },
        ['responsive', 'hover']
      );
    }
  ],
};
