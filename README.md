## Overview

This NextJS project is a simple application that is meant to demonstrate a routing/render behavior that is inconsistent with [this section]([caveats](https://nextjs.org/docs/routing/dynamic-routes#caveats) ) on the docs when using a **rewrite** and **not** using client-side transitions. 

This application contains two routes:

* `/shop/[taxon]/[id]`. This route should handle specific product pages under the given taxonomy.
* `[...page]`. A catch-all route that should render any page.

The following example paths have been generated using `fallback: false`:

1. `/shop/backpacks/48-green`
2. `/shop/specials/summer-sale`

In addition, this project contains the following rewrite, which has nothing to do with the paths or routes above:

```javascript
// next.config.js
rewrites: async () => [
  {
    destination: '/',
    source: '/home',
  }
]
```

## Follow these steps:

1. Set your browser location to [path #2](http://localhost:3000/shop/specials/summer-sale) or using the link under 'Test links using anchor links' section on the homepage.
2. Open a console and inspect the `query` object logs. You'll see that the catch-all route handles it for a brief moment before re-rendering using the dynamic route. This results in a flash of content.
3. Remove or comment out the rewrite in `next.config.js`
4. Restart your dev server or re-build
5. Repeat step #1
6. Only the catch-all route is matched, with no flash of content.

We have reviewed the documented [caveats](https://nextjs.org/docs/routing/dynamic-routes#caveats) section and client-side transitions work as described. 

It is unclear how/why the dynamic route handles a path not specified by `getStaticPaths`since we are setting `fallback` to `false`. Under this setup we would expect for **path #2** to be handled only by catch-all route, and **path #1** only by the dynamic route.







