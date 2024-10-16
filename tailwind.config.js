export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["black"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
