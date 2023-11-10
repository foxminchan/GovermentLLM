const { join } = require('path');
const tailwindTypo = require('@tailwindcss/typography');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const lineClamp = require('@tailwindcss/line-clamp');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        japonica: {
          50: '#fbf5f1',
          100: '#f6e8de',
          200: '#eccebc',
          300: '#dfad92',
          400: '#ce7a58',
          500: '#c86747',
          600: '#ba533c',
          700: '#9b4033',
          800: '#7d362f',
          900: '#652e29',
          950: '#361514',
        },
        'saffron-mango': {
          50: '#fff9eb',
          100: '#ffedc6',
          200: '#ffd988',
          300: '#ffc251',
          400: '#ffa720',
          500: '#f98307',
          600: '#dd5e02',
          700: '#b73e06',
          800: '#942f0c',
          900: '#7a280d',
          950: '#461202',
        },
        tradewind: {
          50: '#f4f9f8',
          100: '#daede9',
          200: '#b4dbd2',
          300: '#87c1b7',
          400: '#67a99f',
          500: '#44887f',
          600: '#346d67',
          700: '#2d5854',
          800: '#274845',
          900: '#243d3a',
          950: '#102322',
        },
        "dark-moderate-blue":{
          50:"#507adc",
          100:"#4a739f",
          200:"#446a91",
          300:"#3d6084",
          400:"#375676",
          500:"#314c69",
          600:"#2b435c",
          700:"#24394e",
          800:"#1e2f41",
          900:"#182534",
          950:"#121c26",
        },
        "white-smoke":{
          50:"#ffffff",
          100:"#f5f5f5",
          200:"#ebebeb",
          300:"#e1e1e1",
          400:"#d8d8d8",
          500:"#cecece",
          600:"#c4c4c4",
          700:"#bababa",
          800:"#b0b0b0",
          900:"#a7a7a7",
          950:"#9d9d9d",
        }
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    backgroundImage:{
      'slogan-bg':"url('././assets/images/banners/hac.svg')"
    }
  },
  plugins: [tailwindTypo,lineClamp],
};
