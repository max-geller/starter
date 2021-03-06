// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---libs-api-interfaces-readme-md": () => import("./../../libs/api-interfaces/README.md" /* webpackChunkName: "component---libs-api-interfaces-readme-md" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

