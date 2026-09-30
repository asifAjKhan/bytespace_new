import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0038E2", lime: "#D4FF33", ink: "#141414", muted: "#6B6B6B", line: "#E6E6E6" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
      maxWidth: { page: "1216px" },
    },
  },
  plugins: [],
};
export default config;
