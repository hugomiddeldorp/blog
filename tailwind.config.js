/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla', 'ui-sans-serif', 'system-ui'],
        'serif': ['Crimson Text', 'ui-serif'],
        'display': ['Marcellus', 'ui-serif'],
      },
    },
  },
  plugins: [],
};

