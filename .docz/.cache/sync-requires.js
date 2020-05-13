const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\code\\template\\.docz\\.cache\\dev-404-page.js"))),
  "component---libs-api-interfaces-readme-md": hot(preferDefault(require("C:\\code\\template\\libs\\api-interfaces\\README.md"))),
  "component---readme-md": hot(preferDefault(require("C:\\code\\template\\README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\code\\template\\.docz\\src\\pages\\404.js")))
}

