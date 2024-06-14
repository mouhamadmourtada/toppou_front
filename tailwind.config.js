/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: ["class"],
  content: [
    // './pages/**/*.{js,jsx}',
    // './components/**/*.{js,jsx}',
    // './app/**/*.{js,jsx}',
    './pages/**/*.{ts,tsx, js, jsx}',
    './src/**/*.{js, ts,jsx, tsx}',
     './components/**/*.{ts,tsx, js, jsx}',
    //  './src/components/ui/**/*.{jsx, js, ts,tsx}',
     './app/**/*.{ts,tsx, js, jsx}',
    //  './@/**/*.{ts,js, jsx,tsx}', // <- HERE
    './@/components/**/*.{js, jsx, ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    
    extend: {
      colors: {

        'bleu_clair' : '#E9F1FA',
        'bleu_fonce' : '#00ABE4',
        'myWhite' : '#FFFFFF',


        "primaire" : '#001952',
        "primaire_hover" : "#283370",

        "secondaire" : "#03ea68",
        "secondaire_hover" : "#47e58b",
        'placeholder_color' : "#A3AED0",

        "tertiaire" : '#707eae',
        "md_gray" : "#A3AED0",
        "gris_clair" : "#f3f4f6",
        "my_white" : '#f4f7fe',

        // "primaire" : '#E9F1FA',
        // "secondaire" : "#00ABE4",
        // "tertiaire" : "#F2F2F2",



        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
       
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      animation: {
        spin360: 'spin360 2s linear infinite',
      },
      keyframes: {
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

     
    },
  },
  plugins: [require("tailwindcss-animate")],
}