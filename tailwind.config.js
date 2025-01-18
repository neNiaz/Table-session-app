import { colors } from './src/shared/const/colors';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          DEFAULT: colors.brand.default,
          disabled: colors.brand.disable,
          hover: colors.brand.hover,
        },
        active: 'hsl(var(--active))',
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
          custom: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  plugins: [],
};
