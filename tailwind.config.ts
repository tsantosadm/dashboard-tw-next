import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content'
      },
      colors: {
       primary: '#8257e6'
      },
    },
  },
  plugins: [],
};
export default config;
