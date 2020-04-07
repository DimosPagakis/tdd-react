module.exports = {
    extends: [
        'codingitwrong',
    ],
    parser: 'babel-eslint',
    plugins: [
        'cypress',
        'jest',
        'react',
    ],
    env: {
        'jest/globals': true,
        'browser': true,
        "cypress/globals": true,
        "jquery": true,
        'es6': true,
    }
};
