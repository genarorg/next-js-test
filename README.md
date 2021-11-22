## Overview

Pre-generated paths from a dynamic route take precedence over pre-generated paths from a top-level catch-all route, both using `fallback: false`. Interestingly, this can be fixed by removing existing rewrites in the project. This fix is partial, because it only works with direct navigation, not client-side transitions using `next/link`.
## To reproduce:

The sample application contains two routes:

* `/shop/[taxon]/[id]`. This route should handle specific product pages under the given taxonomy.
* `[...page]`. A catch-all route that should render any page.

The following example paths have been generated using `fallback: false`:

1. `/shop/backpacks/48-green`  -> generated from dynamic route
2. `/shop/specials/summer-sale`-> generated from catch-all route

In addition, this project contains the following rewrite, which has nothing to do with the above:

```javascript
// next.config.js
rewrites: async () => [
  {
    destination: '/',
    source: '/home',
  }
]
```
### Follow these steps

1. Set your browser location to [path #2](http://localhost:3000/shop/specials/summer-sale) or using the link under 'Test links using anchor links' section on the homepage.
2. Open a console and inspect the `query` object logs. You'll see that the catch-all route handles it for a brief moment before re-rendering using the dynamic route. **This results in a flash of content.**

To apply a partial fix:

3. Remove or comment out the rewrite in `next.config.js`
4. Restart your dev server or re-build
5. Repeat step #1
6. Only the catch-all route is matched, with no flash of content.

We have reviewed the documented [caveats](https://nextjs.org/docs/routing/dynamic-routes#caveats) section and client-side transitions work as described, but it is unclear how/why the dynamic route handles a path not specified by `getStaticPaths` since we are setting `fallback` to `false`. 

## Expected Behavior

Under this setup we would expect for **path #2** to be handled only by catch-all route, and **path #1** only by the dynamic route.







