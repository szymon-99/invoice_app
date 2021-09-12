module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    colors: {
      primary: 'var(--color-primary-bg)',
      primaryLight: 'var(--color-primary-light)',
      fontPrimary: 'var(--font-primary)',
      fontSecondary: 'var(--font-secondary)',
      blue: {
        100: '#DFE3FA',
        300: '#9277FF',
        500: '#7C5DFA',
        600: '#7E88C3',
      },
      dark: {
        100: '#252945',
        200: '#373B53',
        300: '#1E2139',
        400: '#141625',
        900: '#0C0E16',
      },
      white: '#FFFFFF',
      light: '#F8F8F8',
      lightBlue: '#F9FAFE',
      gray: '#888EB0',
      red: {
        100: '#FF9797',
        500: '#EC5757',
      },
      green: '#33D69F',
      orange: '#FF8F00',
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      maxWidth: {
        '90vw': '90vw',
      },
      minWidth: {
        24: '6rem',
        28: '7rem',
        xl: '36rem',
      },
      maxHeight: {
        18: '4.5rem',
      },
      boxShadow: {
        1: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
        top: '0px -30px 50px -30px rgba(0, 0, 0, 0.15)',
      },
      inset: {
        18: '4.5rem',
      },

      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'focus-visible', 'group-hover'],
      animation: ['group-hover'],
      height: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
