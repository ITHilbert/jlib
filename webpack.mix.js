const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


//JavaScript incl. Vue.js erstellen
mix.js('src/vuecomponents.js', 'dist/vuecomponents.js').vue().sourceMaps();


/* //CSS
mix.combine(['resources/css/vendor/fontawesome-free/css/all.min.css',
    'resources/css/vendor/overlayScrollbars/OverlayScrollbars.min.css',
    'resources/css/vendor/adminLTE/adminlte-fonts.css',
    'resources/css/vendor/adminLTE/adminlte.min.css',
    'resources/css/vendor/DataTables/DataTables.min.css',
    'resources/css/vendor/vue/vuecomponents.css',
    'resources/css//custom.css',
], 'public/css/app.css'); * /


//CSS- Dateien kopieren
//mix.copy('resources/vendor/adminLTE/css/adminlte.min.css.map', 'public/css/adminlte.min.css.map')

//JS- Dateien kopieren
mix.copy('resources/js/custom.js', 'public/js/custom.js')