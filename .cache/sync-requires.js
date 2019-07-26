const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-blog-layout-js": hot(preferDefault(require("/Users/JamesCassidy/Projects/Portfolio_Site/src/components/blogLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/JamesCassidy/Projects/Portfolio_Site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/JamesCassidy/Projects/Portfolio_Site/src/pages/index.js")))
}

