/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Add this line
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
        colors: {
            dark: '#0a0a0a',
        },
        fontFamily: {
            serif: ['"Playfair Display"', 'serif'], // For artwork titles
            sans: ['Inter', 'sans-serif'],        // For body text
        },
        },
    },
    plugins: [],
};