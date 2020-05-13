const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Template',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\code\\template\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Template',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\code\\template',
          templates:
            'C:\\code\\template\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\code\\template\\.docz',
          cache: 'C:\\code\\template\\.docz\\.cache',
          app: 'C:\\code\\template\\.docz\\app',
          appPackageJson: 'C:\\code\\template\\package.json',
          appTsConfig: 'C:\\code\\template\\tsconfig.json',
          gatsbyConfig: 'C:\\code\\template\\gatsby-config.js',
          gatsbyBrowser: 'C:\\code\\template\\gatsby-browser.js',
          gatsbyNode: 'C:\\code\\template\\gatsby-node.js',
          gatsbySSR: 'C:\\code\\template\\gatsby-ssr.js',
          importsJs: 'C:\\code\\template\\.docz\\app\\imports.js',
          rootJs: 'C:\\code\\template\\.docz\\app\\root.jsx',
          indexJs: 'C:\\code\\template\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\code\\template\\.docz\\app\\index.html',
          db: 'C:\\code\\template\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
