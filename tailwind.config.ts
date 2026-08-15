import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['HelloChristmas', 'sans-serif'],
                desc: ['Fairfax', 'sans-serif'],
            }
        }
    },
    plugins: [],
} satisfies Config;