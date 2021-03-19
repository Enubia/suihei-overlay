const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    // './src/components/**/*.{js,ts,vue}',
    // './src/views/**/*.{js,ts,vue}',
    // './src/*.{js,ts,vue}'
  ],
  darkMode: false,
  important: false,
  separator: ':',
  theme: {
    colors: {
      ...defaultTheme.colors,
      acn: { light: '#47B592', DEFAULT: '#2D9B78' },
      alc: { light: '#fff', DEFAULT: '#fff' },
      arc: { light: '#43532f', DEFAULT: '#394925' },
      arm: { light: '#fff', DEFAULT: '#fff' },
      ast: { light: '#FFF75A', DEFAULT: '#FFE74A' },
      bg: { light: '#fff', DEFAULT: '#fff' },
      bishop: { light: '#fff', DEFAULT: '#fff' },
      blm: { light: '#B589E6', DEFAULT: '#A579D6' },
      blu: { light: '#283D7E', DEFAULT: '#0e2364' },
      brd: { light: '#43532f', DEFAULT: '#394925' },
      bsm: { light: '#fff', DEFAULT: '#fff' },
      btn: { light: '#fff', DEFAULT: '#fff' },
      carbuncle: { light: '#fff', DEFAULT: '#fff' },
      chocobo: { light: '#fff', DEFAULT: '#fff' },
      cnj: { light: '#fff', DEFAULT: '#FFF0DC' },
      crp: { light: '#fff', DEFAULT: '#fff' },
      cul: { light: '#fff', DEFAULT: '#fff' },
      dnc: { light: '#F2C0BF', DEFAULT: '#E2B0AF' },
      drg: { light: '#5174DD', DEFAULT: '#4164CD' },
      drk: { light: '#e034dc', DEFAULT: '#d126cc' },
      empty: { light: '#fff', DEFAULT: '#fff' },
      eos: { light: '#fff', DEFAULT: '#fff' },
      error: { light: '#fff', DEFAULT: '#fff' },
      fsh: { light: '#fff', DEFAULT: '#fff' },
      garuda: { light: '#fff', DEFAULT: '#fff' },
      gla: { light: '#B8E2F6', DEFAULT: '#A8D2E6' },
      gnb: { light: '#93874A', DEFAULT: '#796D30' },
      gsm: { light: '#fff', DEFAULT: '#fff' },
      handle: { light: '#fff', DEFAULT: '#fff' },
      ifrit: { light: '#fff', DEFAULT: '#fff' },
      lb: { light: '#35a9ce', DEFAULT: '#2599be' },
      lnc: { light: '#5174DD', DEFAULT: '#4164CD' },
      ltw: { light: '#fff', DEFAULT: '#fff' },
      mch: { light: '#7EF1E6', DEFAULT: '#6EE1D6' },
      min: { light: '#fff', DEFAULT: '#fff' },
      mnk: { light: '#e6ac00', DEFAULT: '#d69c00' },
      mog: { light: '#fff', DEFAULT: '#fff' },
      mrd: { light: '#ff4641', DEFAULT: '#cf2621' },
      nin: { light: '#bF2974', DEFAULT: '#AF1964' },
      pgl: { light: '#e6ac00', DEFAULT: '#d69c00' },
      pld: { light: '#B8E2F6', DEFAULT: '#A8D2E6' },
      pug: { light: '#fff', DEFAULT: '#fff' },
      rdm: { light: '#e89b9b', DEFAULT: '#e87b7b' },
      rog: { light: '#bF2974', DEFAULT: '#AF1964' },
      sam: { light: '#f48db4', DEFAULT: '#e46d04' },
      sch: { light: '#A677FF', DEFAULT: '#8657FF' },
      selene: { light: '#fff', DEFAULT: '#fff' },
      smn: { light: '#47B592', DEFAULT: '#2D9B78' },
      thm: { light: '#B589E6', DEFAULT: '#A579D6' },
      titan: { light: '#fff', DEFAULT: '#fff' },
      war: { light: '#ff4641', DEFAULT: '#cf2621' },
      whm: { light: '#FFFFF6', DEFAULT: '#FFF0DC' },
      wvr: { light: '#fff', DEFAULT: '#fff' }
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '8px'
    },
    borderWidth: {
      3: '3px'
    }
  },
  variants: {},
  plugins: []
};
