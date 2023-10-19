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
        'light-blue':'#f2f7ff',
        'light-grey':'#bdc3c7',
        'grey':'#a3a8ab',
        'coral':'#ff5e62',
        'orange':'#ff9966',
        'lavender':'#E9E4F0',
        'blue':'#0575E6',
        'dark-blue':'#0B409c',
        'ink-blue':'#10316B',
        'medium-blue':'#0B4870',
        'pale-yellow':'#FFE867'
      },
      width:{
        'card':'80%',
        'code':'25px',
        'option':'33%',
        'content':'22%',
        'button':'80%',
      },
      height:{
        'code':'10px',
        'content':'50vh',
        'button':'40px',
        'card':'50px'
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
        'login':'190px',
        'forgot':'70%',
        'content-top':'6%',
        'content-left':'20%',
        'element':'10%',
        'select':'57%',
        'card-input':'20%',
        'points-left':'10%',
      },    
      fontFamily:{
        'roboto':'Roboto Slab Variable, sans-serif',
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
