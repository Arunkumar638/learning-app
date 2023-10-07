import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      utilities: {
        '.custom-button': {
          display: 'inline-block',
          outline: 0,
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          'font-weight': 600,
          'line-height': '10px',
          'border-radius': '8px',
          'font-size': '14px',
          height: '38px',
          'margin-left': '1300px',
          background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)',
          color: 'white',
          padding: '0 20px',
        },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    },
  },
  plugins: [],
}
export default config
