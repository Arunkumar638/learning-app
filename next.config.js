
/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode:true,
}

module.exports = NextConfig



// const {NextFederationPlugin} = require('@module-federation/nextjs-mf');

// module.exports = {
//   webpack(config, options) {
//     const { isServer } = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'parentApp',
//         remotes: {
//           dashboardApp: `dashboardApp@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: '^17.0.0' },
//           'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
//         },
//       })
//     );

//     return config;
//   },
// };

// const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
// /** @type {import('next').NextConfig} */
// module.exports = {
//   webpack(config, options) {
//     const { isServer } = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'main',
//         remotes: {
//           dashboardApp: `dashboardApp@http://localhost:3000/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: '^17.0.0' },
//           'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
//         },
//       })
//     );

//     return config;
//   },
// };