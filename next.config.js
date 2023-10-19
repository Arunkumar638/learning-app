
// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// /** @type {import('next').NextConfig} */

// module.exports = {
//   // other Next.js configurations
//   devServer: {
//     port: 3002,
//   },
//   webpack: (config, options) => {
//     const {isServer} = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'main_app',
//         remotes: {
//           dashboard: `dashboardApp@http://localhost:3001/primaryEntry.js`,
//         },
//         filename:'primaryEntry.js',
//       })
//     );
   
//     return config;
//   },
// };


/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode:true,
}

module.exports = NextConfig

// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

// module.exports = {
//   devServer: {
//     port: 3000,
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.tsx'],
//   },
//   webpack: (config, options) => {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'parentApp',
//         remotes: {
//           dashboardApp: 'dashboardApp@http://localhost:3001/remoteEntry.js',
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