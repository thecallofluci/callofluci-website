import { extendTheme } from '@chakra-ui/react'
import { config, textStyles } from './foundations'
const overrides = {
  config,
  colors: {
    purple: {
      300: '#9F94E8', // light/mid purple
      500: '#5554D9', // mid purple
      600: '#672AC8', // mid purple
      900: '#2B247C', // very dark purple
    },
    blue: {
      200: '#5D7996', // changed from original, to a luci-300-blue
      900: '#1E2135', // changed from original, to a luci-800-blue
    },
    gray: {
      50: '#FAF8FF', // super light gray
      200: '#E6E3EC', // light purple gray
    },
    luci: {
      // added custom orange color, luci
      50: '#F3DECE',
      100: '#F0D6C2',
      200: '#ECCBB1',
      300: '#E6BA99',
      400: '#E0AA80',
      500: '#D8945F',
      600: '#CF7B3A',
      700: '#B4682C',
      800: '#A05B27',
      900: '#834B20',
      950: '#6F3F1B',
    },
    bone: {
      // added custom neutral color, bone
      50: '#FBFBF9',
      100: '#F9F8F6',
      200: '#F5F4EF',
      300: '#EFEDE6',
      400: '#E9E6DC',
      500: '#E3DFD2',
      600: '#DAD5C3',
      700: '#D2CCB7',
      800: '#CAC3AA',
      900: '#BEB597',
      950: '#B9AF8E',
    },
    stone: {
      // added custom coal/black color, stone
      50: '#FAFAF9',
      100: '#F5F5F4',
      200: '#E7E5E4',
      300: '#D6D3D1',
      400: '#A8A29E',
      500: '#78716C',
      600: '#57534E',
      700: '#44403C',
      800: '#292524',
      900: '#1C1917',
      950: '#0C0A09',
    },
  },
  components: {},
  fonts: {
    heading: "'Overpass', sans-serif",
    body: "'Overpass', sans-serif",
    mono: "'Overpass Mono', monospace",
  },
  fontSizes: {
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.375rem',
    '5xl': '2.75rem',
    '6xl': '3.25rem',
    '7xl': '4rem',
  },
  fontWeights: {
    // added custom font weights
    overpass: {
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
    overpassMono: {
      normal: 400,
      bold: 700,
    },
  },
  shadows: {},
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
        padding: 0,
        margin: 0,
      },
      body: {
        transition: 'background 200ms linear !important',
        bg: 'bg',
        color: 'text',
      },
      p: {
        lineHeight: '1.7',
        '&:not(:last-of-type)': { mb: '4' },
      },
    }),
  },
  textStyles,
  semanticTokens: {
    colors: {
      a: { _light: 'luci.700', _dark: 'luci.200' }, // text
      b: { _light: 'luci.700', _dark: 'luci.300' },
      c: { _light: 'luci.700', _dark: 'luci.400' },
      d: { _light: 'luci.300', _dark: 'luci.500' },
      e: { _light: 'luci.200', _dark: 'luci.600' },
      f: { _light: 'bone.200', _dark: 'luci.700' }, // background
      mode: { _light: 'stone.200', _dark: 'stone.900' },

      text: 'a',
      secondary: 'b',
      primary: 'c',
      highlight: 'd',
      bg: 'f',

      border: 'a',
      header: 'c',
      error: { _light: 'red.500', _dark: 'red.300' },
    },
  },
}

export default extendTheme(overrides)
