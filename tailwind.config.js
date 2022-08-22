/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        gray: {
          light: 'hsl(217, 12%, 63%)',
          medium: 'hsl(216, 12%, 54%)',
        },
        darkblue: 'hsl(213, 19%, 18%)',
        verydarkblue: 'hsl(216, 12%, 8%)',
      },
    },
  },
  plugins: [],
}
