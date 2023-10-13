import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dark-purple':'#081A51',
        'light-white':'rgba(255,255,255,0.18)',
        'light-yellow':'#FFC371',
        'light-grey':'#bdc3c7',
        'coral':'#ff5e62',
        'orange':'#ff9966',
        'lavender':'#E9E4F0',
        'blue':'#0575E6'
      },
      width:{
        'card':'80%',
        'code':'25px',
        'option':'40%'
      },
      height:{
        'code':'10px'
      },
      padding:{
        'card':'1.25rem',
        'forgot':'3rem'
      },
      margin:{
        'align':'100px',
        'card':'45px',
        'option':'175px',
        'signup':'15px',
        'forgot':'150px'
      },     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    
    },
  },
  plugins: [],
}
export default config
