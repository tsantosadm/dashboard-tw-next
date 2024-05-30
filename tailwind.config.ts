import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
       primary: '#8257e6',
       violet: {
        25: '#fcfaff'
       }
      },

      keyframes: {
        slideDownAndFade:{
          from: { opacity: '0', transform: 'translateY(-2px)'},
          to: { opacity: '1', transform: 'translateY(0)'}
        },
        slideUpAndFade:{

        },
      },

      animation: {
        slideDownAndFade:'slideDownAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: ''
      },
    },
  },
  plugins: [],
};
export default config;
