/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Poppins = marca/logo y títulos. Inter = cuerpo.
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        // ===== Tokens existentes (valores actualizados al rediseño) =====
        fondo: "#0A0A0B",       // fondo principal (negro profundo)
        texto: "#F5F3EE",       // texto claro (cálido)
        primario: "#141416",    // secciones / tarjetas
        secundario: "#1C1C1F",  // contraste leve
        dorado: "#D4A34A",      // acento / CTA (dorado luminoso)

        // ===== Tokens nuevos del rediseño =====
        // Superficies
        surface: "#141416",     // tarjeta base
        "surface-2": "#1C1C1F", // tarjeta elevada / contraste

        // Texto (jerarquía)
        "ink": "#F5F3EE",       // texto principal
        "ink-soft": "#B0ABA1",  // texto secundario
        "ink-muted": "#6E6A62", // texto terciario / captions

        // Dorado (escala)
        "gold-lite": "#EBCB86", // dorado claro (highlights, gradientes)
        gold: "#D4A34A",        // dorado principal
        "gold-deep": "#B8860B", // dorado profundo (hover, sombras)

        // Líneas / bordes
        line: "rgba(255,255,255,0.09)",
      },
      // Radios consistentes con el prototipo
      borderRadius: {
        xl2: "20px",
      },
      // Curva de animación premium usada en todo el prototipo
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      // Sombra dorada reutilizable (glow de acentos)
      boxShadow: {
        gold: "0 0 18px rgba(212,163,74,0.4)",
        "gold-lg": "0 20px 45px -18px rgba(0,0,0,0.7)",
      },
      // Keyframes de animaciones épicas (para portar del prototipo)
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,40px) scale(0.95)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 4px rgba(212,163,74,0.16)" },
          "50%": { boxShadow: "0 0 0 9px rgba(212,163,74,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 5s cubic-bezier(0.16,1,0.3,1) infinite",
        drift: "drift 20s ease-in-out infinite",
        "pulse-gold": "pulseGold 2.6s cubic-bezier(0.16,1,0.3,1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};