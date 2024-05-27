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
    },
  },
  plugins: [],
};
export default config;
