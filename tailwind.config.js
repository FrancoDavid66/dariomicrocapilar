/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        fondo: "#0F0F0F", // fondo principal
        texto: "#F5F5F5", // texto claro
        primario: "#1C1C1C", // secciones / tarjetas
        secundario: "#2E2E2E", // contraste leve
        dorado: "#B8860B", // acento / CTA
      },
    },
  },
  plugins: [],
};
