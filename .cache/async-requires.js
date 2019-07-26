// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-blog-layout-js": () => import("/Users/JamesCassidy/Projects/Portfolio_Site/src/components/blogLayout.js" /* webpackChunkName: "component---src-components-blog-layout-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/JamesCassidy/Projects/Portfolio_Site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/JamesCassidy/Projects/Portfolio_Site/.cache/data.json")

