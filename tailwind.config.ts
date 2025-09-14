import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/theme';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite ease-in-out',
      },
      screens: {
        xl: '1920px',
        lg: '1280px',
        lg1: '940px',
        lg2: '1080px',
        md: '768px',
        sm: '375px',
      },
      colors: {
        white: '#FFFFFF',
        accent: '#E8E7E7',
        primary: '#2C5F42',
        secondary: '#2C5F42',

        'text-primary': '#121212',
        'text-primary-light': '#FFFFFF',
        'text-secondary': '#121212B2',
        'text-secondary-dark': '#121212E5',
      },
      fontSize: {
        // 'header-1': ['72px', { lineHeight: '110%', letterSpacing: '-1.44px'}],
        // 'header-2': ['64px', { lineHeight: '110%', letterSpacing: '-1.28px'}],
        // 'header-3': ['48px', { lineHeight: '120%', letterSpacing: '-0.96px'}],
        // 'header-4': ['24px', { lineHeight: '140%', letterSpacing: '0px'}],

        'custom-6xl': [
          '64px',
          { lineHeight: '110%', letterSpacing: '-1.28px' },
        ],
        // 'header-3': ['48px', { lineHeight: '120%', letterSpacing: '-0.96px'}],
        // 'header-4': ['24px', { lineHeight: '140%', letterSpacing: '0px'}],

        // 'title-1': ['24px', { lineHeight: '140%', letterSpacing: '0px'}],
        // 'title-2': ['18px', { lineHeight: '160%', letterSpacing: '0px'}],
        // 'title-3': ['16px', { lineHeight: '160%', letterSpacing: '0px'}],

        'custom-md': ['18px', { lineHeight: '140%', letterSpacing: '0px' }],
        'custom-base': ['16px', { lineHeight: '140%', letterSpacing: '0px' }],
        'custom-sm': ['14px', { lineHeight: '140%', letterSpacing: '0px' }],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), heroui()],
} satisfies Config;
