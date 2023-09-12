/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './**/*.php',
        './assets/js/*.js'
    ],
    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
            },
            fontSize: {
                xs: '0.85rem', // 13.6px
                sm: '1rem', // 16px
                base: '1.2rem', // 18px
                l: '1.25rem', // 20px
                xl: '1.45rem', // 24px
                xxl: '1.72rem', // 28px
                xxxl: '2rem', // 32px
                x4l: '2.5rem', // 40px
            },
            height: {
                '10vh': '10vh',
                '20vh': '20vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
            },
            backgroundImage: {
            },
            keyframes: {
                translateCardTitle: {
                    '0%, 100%': { transform: 'translateY(-60px)' },
                }
            },
            animation: {
                cardTitleAnimation: 'translateCardTitle 0.5s ease forwards',
            },
            gridTemplateRows: {
                'auto': 'auto',
            },
            backgroundPosition: {
                'center-top': 'center top',
                '20_center': '20% center',
                '25_center': '25% center',
                'center_-12rem': 'center -12rem',
            }
        },
    },
    plugins: [],
}