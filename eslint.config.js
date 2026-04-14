import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['js/**/*.js', 'script.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        navigator: 'readonly',
        HTMLElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        CanvasRenderingContext2D: 'readonly',
        Math: 'readonly',
        parseFloat: 'readonly',
        parseInt: 'readonly',
        isNaN: 'readonly',
        isFinite: 'readonly',
        Array: 'readonly',
        Object: 'readonly',
        Number: 'readonly',
        Error: 'readonly',
        alert: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
