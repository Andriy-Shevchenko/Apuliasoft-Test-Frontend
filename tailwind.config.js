const spacings = {};
for (let i = -100; i < 500; i += 0.5) {
  spacings[i] = `${i / 4}rem`;
}

const opacities = {};
for (let i = 0; i < 100; i ++) {
  opacities[i] = (i * 0.01).toFixed(2);
}

const colors = {
  blue: {
    50: '#8db9c9',
    100: '#4aa6b7',
    150: '#f6fafa',
    200: '#dfedf1',
    250: '#158fa4',
    300: '#bbd3e0'
  },
  gray: {
    200: '#9b9b9b',
    50: '#B5B5B5',
    100: '#c2c1c1',
    150: '#e8e9eb',
  }
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '550px',
        'max-xs': { max: '549px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1279px' },
      },
      colors,
      borderColors: colors,
      spacing: spacings,
      minWidth: spacings,
      minHeight: spacings,
      maxWidth: spacings,
      maxHeight: {
        ...spacings,
        content: 'fit-content',
      },
      opacity: opacities,
      zIndex: {
        '-1': -1,
        1: 1,
        100: 100,
        max: 10000000,
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-in-out',
        'slide-in-up': 'slideInUp 150ms ease-in-out',
        'zoom-in': 'zoomIn 150ms ease-in-out',
      },
      boxShadow: {
        md: '0 0 5px #8db9c9',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
};
