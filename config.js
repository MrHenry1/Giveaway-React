SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@16.13.1/umd/react.production.min.js',
    'react-dom': 'react-dom@16.13.1/umd/react-dom.production.min.js',
    'react-is': 'react-is@16.13.1/umd/react-is.production.min.js',
    'styled-components': 'styled-components@5.1.1/dist/styled-components.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index.jsx')
  .catch(console.error.bind(console));