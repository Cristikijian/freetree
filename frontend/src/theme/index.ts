import { defineConfig } from '@chakra-ui/react';

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f7f0' },
          100: { value: '#c2ebd9' },
          500: { value: '#2abf7f' },
        },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
        heading: { value: 'system-ui, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        'brand.primary': { value: '{colors.brand.500}' },
      },
    },
  },
});

export default theme;