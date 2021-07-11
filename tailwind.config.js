module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    variants: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
    extend: {},
  },
  plugins: [],
};
