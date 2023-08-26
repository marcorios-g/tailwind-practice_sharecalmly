/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '992px',
      lg: '1140px',
      xl: '1280px',
    },
    fontFamily: {
      'sans': ['IBM Plex Sans', 'sans-serif'],
      'serif': ['Souvenir', 'serif'],
    },
    fontSize: {
      md: '14px',
      base: '16px',
      l: '18px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '40px',
      '6xl': '48px',
      '7xl': '50px',
      '8xl': '56px',
      '9xl': '64px',
    },
    extend: {
      colors: {
        white: 'hsla(0, 0%, 100%, 1)',
        mobNavHover: 'hsla(210, 14%, 97%, 1)',
        black: 'hsla(0, 0%, 8%, 1)',
        linkHover: 'hsla(225, 7%, 21%, 1)',
        textHover: 'hsla(240, 1%, 41%, 1)',
        bgBlue: 'hsla(218, 100%, 95%, 1)',
        blueBorder: 'hsla(225, 96%, 91%, 1)',
        bgOrange: 'hsla(29, 100%, 95%, 1)',
        bgYellow: 'hsla(65, 100%, 95%, 1)',
      },
      lineHeight: {
        tight: '20px',
        normal: '24px',
        '1': '26px',
        '2': '28px',
        '3': '40px',
        '4': '56px',
        '5': '64px',
        '6': '72px',
        '7': '120%',
        '8': '140%',
        '9': '142%',
      },
      spacing: {
        '74px': '74px',
      },
    },
  },
  plugins: [],
}

