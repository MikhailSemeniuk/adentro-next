import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-3": 'linear-gradient(90deg, #FFA642 13%, #EE4D5D 100%)'
            },
            container: {
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    '2xl': 'calc(1280px + 2.5rem)',
                },
                padding: '1.25rem',
            },
            colors: {
                'main-blue': '#1A1365'
            },
            fontSize: {
                'footer-heading': ['4.25rem', {'fontWeight': '500', 'lineHeight': '5rem'}],
                'footer-heading-mobile': ['2.5rem', {'fontWeight': '500', 'lineHeight': '1.2'}],
                'section-heading': ['4.875rem', {'fontWeight': '500', 'lineHeight': '1.2'}],
                'section-heading-mobile': ['2.5rem', {'fontWeight': '500', 'lineHeight': '1.2'}],
                'main-heading': ['5.75rem', {'fontWeight': '500', 'lineHeight': '1.2'}],
                'main-heading-mobile': ['3.75rem', {'fontWeight': '500', 'lineHeight': '1.2'}],
                'section-subheading': ['2.625rem', {'fontWeight': '600', 'lineHeight': '1.2'}]
            },
            flex: {
                'full': '1 0 100%',
                'auto-no-shrink': '1 0 auto'
            },
            gridTemplateColumns: {
                'why-us': 'repeat(auto-fill,minmax( min(100%, 28rem), 1fr));',
                'modules': 'repeat(auto-fill,minmax( min(100%, 35rem), 1fr));',
                'elastic': 'repeat(auto-fill,minmax( min(100%, 22rem), 1fr));',
                'logos-auto': 'repeat(4, auto)',
            }
        },
    },
    plugins: [],
};
export default config;
