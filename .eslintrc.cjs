module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:perfectionist/recommended-natural',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        'react',
        'react-hooks',
        'prettier',
        '@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        'perfectionist/sort-objects': [
            'error',
            {
                type: 'natural',
                order: 'asc',
            },
        ],
        'no-var': 'error',
        'prefer-const': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'max-len': [
            'error',
            {
                code: 100,
                ignoreComments: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
    },
};
