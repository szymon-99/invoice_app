module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    colors: {
      primary: 'var(--color-primary-bg)',
      primarySoft: 'var(--color-primary-soft)',
      primaryLight: 'var(--color-primary-light)',
      nav: 'var(--nav-color)',
      summary: 'var(--summary-color)',
      fontPrimary: 'var(--font-primary)',
      fontSecondary: 'var(--font-secondary)',
      btnPrimary: 'var(--blue-500)',
      btnPrimaryHover: 'var(--blue-300)',
      btnSecondary: 'var(--btn-secondary)',
      btnSecondaryHover: 'var(--dark-300)',
      btnDark: 'var(--btn-dark)',
      btnDarkHover: 'var(--btn-dark-hover)',
      btnLight: 'var(--btn-light)',
      btnLightHover: 'var(--btn-light-hover)',
      lightBlue: 'var(--light-blue)',
      red: 'var(--red-500)',
      redHover: 'var(--red-100)',
      orange: 'var(--orange)',
      green: 'var(--green)',
      gray: 'var(--gray)',
      white: 'var(--white)',
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
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'focus-visible'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
