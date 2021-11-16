// module.exports = {
//   async rewrites() {
//     return {
//       beforeFiles: [
//         // These rewrites are checked after headers/redirects
//         // and before all files including _next/public files which
//         // allows overriding page files
//         {
//           source: '/posts/foo/ssg-ssr',
//           destination: '/posts2/foo/ssg-ssr',
//         },
//       ]
//     }
//   },
// }