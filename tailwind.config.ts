import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primary: {
          'white': 'hsl(0, 0%, 100%)',
          'black': 'hsl(0, 0%, 0%)',
          'dark-gray': 'hsl(0, 0%, 55%)',
          'very-dark-gray': 'hsl(0, 0%, 41%)',
        },
      },
      fontFamily: {
        alata: ['var(--font-alata)', 'system-ui', 'sans-serif'],
        josefin: ['var(--font-josefin-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: '15px',
      },
      fontWeight: {
        regular: '400',   // Alata regular weight
        light: '300',     // Josefin Sans light weight
      },
    },
  },
  plugins: [],
} satisfies Config;
