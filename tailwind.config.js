export default {
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
}
