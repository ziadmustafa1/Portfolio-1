import nextVitals from 'eslint-config-next/core-web-vitals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const nextConfig = nextVitals.map((config) => {
  if (!config.rules) return config;

  return {
    ...config,
    rules: Object.fromEntries(
      Object.entries(config.rules).filter(([ruleName]) => !ruleName.startsWith('react/')),
    ),
  };
});

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'logs/**'],
  },
  {
    rules: {
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    files: ['lib/utils.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          ignoreRestArgs: true,
          fixToUnknown: true,
        },
      ],
    },
  },
];

export default eslintConfig;
