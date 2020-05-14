const mix = require('laravel-mix');

const path = require('path');
mix.webpackConfig({
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'resources/js/'),
    },
  },
})

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

