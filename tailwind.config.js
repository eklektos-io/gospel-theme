module.exports = {
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'sans': 'Montserrat',
        'serif': 'Playfair Display',
       },
       fontSize: {
        '7xl': '4.5rem',
       },
       spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        'full': '100%',
       },
      colors: {
        color: "var(--color)",
        overlay: "var(--overlay)",
        heroOverlay: "var(--hero-overlay)",
        gray: {
          900: "#181818",
          800: "#282828",
          700: "#404040",
          600: "#545454",
          500: "#727272",
          400: "#a3a3a3",
          300: "#d5d5d5",
          200: "#e7e7e7",
          100: "#f4f4f4",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}