const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require('./styles/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    fontSize: {
      xss: ['10px', '12px'],
      xs: ['12px', '14.25px'],
      sm: ['14px', '16.5px'],
      base: ['16px', '18.75px'],
      lg: ['18px', '21px'],
      xl: ['24px', '30px'],
      '2xl': ['28px', '32px'],
      '3xl': ['36px', '42px'],
      '4xl': ['50px', '60px'],
      '5xl': ['60px', '70px'],
    },
    extend: {
      zIndex: {
        99: '10000',
      },
      width: {
        18: '4.5rem',
        magic: '846px',
      },
      minWidth: {
        '2/3': '66%',
      },
      maxWidth: {
        xss: '15.75rem',
        magic: '846px',
        '3xl': '44rem',
        '7xl': '80rem',
      },
      gap: {
        18: '4.5rem',
      },
      height: {
        18: '4.5rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors,
      fontFamily: {
        sohne: ['Sohne', 'sans-serif'],
      },
      boxShadow: {
        overflow: '0px 2px 5px 0px rgba(255, 255, 255, 0.8)',
        innerflow: 'inset -5px -5px 5px 0 rgba(240, 240, 240, 0.9)',
        'card-xl': '20px 20px 60px rgba(0, 0, 0, 0.1)',
        card: '8px 8px 48px rgba(0, 0, 0, 0.12)',
        'card-sm': '8px 8px 32px rgba(0, 0, 0, 0.16)',
        'card-xs': '6px 6px 24px rgba(0, 0, 0, 0.08)',
        active: '0px 0px 96px rgba(169, 144, 254, 0.2)',
      },
      backgroundSize: {
        110: '110%',
        125: '125%',
      },
      rotate: {
        15: '15deg',
      },
      scale: {
        200: '200%',
        300: '300%',
      },
      dropShadow: {
        item: '8px 8px 16px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'purple-hazing': 'purple-hazing 2s linear infinite',
        appear: 'appear 100ms ease-in-out 1 forwards',
        disappear: 'disappear 100ms ease-in-out 1 forwards',
        simulator: 'enlarge 500ms ease-in-out 1 forwards',
      },
      transitionProperty: {
        height: 'height, min-height, max-height',
        spacing: 'margin, padding',
      },
      keyframes: {
        'purple-hazing': {
          '0%': {
            background:
              'linear-gradient(45deg, #C57DA8, #769EFF, #C57DA8, #769EFF)',
            backgroundSize: '400% 100%',
            backgroundPosition: '0% 50%',
          },
          '100%': {
            background:
              'linear-gradient(45deg, #C57DA8, #769EFF, #C57DA8, #769EFF)',
            backgroundSize: '400% 100%',
            backgroundPosition: '100% 50%',
          },
        },
        appear: {
          '0%': { visibility: 'visible' },
          '100%': { opacity: 1, visibility: 'visible' },
        },
        enlarge: {
          '0%': {
            zIndex: 100,
            width: '100vw',
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          },
          '100%': {
            zIndex: 100,
            height: '100vh',
            position: 'fixed',
            bottom: 0,
            top: 0,
            width: 'calc(100vw - 550px)',
          },
        },
        disappear: {
          '0%': { visibility: 'visible' },
          '100%': { opacity: 0, visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
