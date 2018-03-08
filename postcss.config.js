// module.exports = {
//     plugins: [
//         require('postcss-smart-import')({ /* ...options */ }),
//         require('precss')({ /* ...options */ }),
//         require('autoprefixer')
//     ]
// }
// const px2rem = require('postcss-pxtorem');
// const px2remOpts = {
//   rootValue: 20,
//   propWhiteList: []
// };
const px2rem = require('postcss-px2rem');
module.exports = {
  plugins: [
    // pxtorem({rootValue: 20, propWhiteList: []}),
    require('postcss-import')(),
    require('autoprefixer')({
      browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']
    }),
    px2rem({remUnit: 20})
  ]
};
