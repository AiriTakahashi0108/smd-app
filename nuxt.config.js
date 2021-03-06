
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  srcDir: 'src/',
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/styles/customVueCalStyles.css',
    '~/assets/styles/customAntDesignStyles.css'

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ant-design-vue',
    '@/plugins/vue-cal',
    '@/plugins/moment',
    { src: '~/plugins/vue-cal.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/moment', ['ja']],
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    hardSource: false,
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          features: {
            'nesting-rules': true,
          }
        }),
        require('postcss-custom-properties')(),
        require('postcss-nested')()
      ]
    },
  },
}
