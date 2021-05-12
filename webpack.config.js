const fs = require('fs');
const path = require('path');
const glob = require('glob');

const AddStylesToDocumentPlugin = require('webpack-add-styles-to-document');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const ClosurePlugin = require('closure-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryMap = {}
const componentEntries = glob.sync('src/components/*');

for (const entry of componentEntries) {
  const componentName = path.basename(entry).replace(/\.((js|ts)x?)/i, '');
  entryMap[componentName] = path.resolve(entry);
}

console.log('Exporting', componentEntries)

const isServer = typeof window === 'undefined'
const extractCSSPlugin = new MiniCssExtractPlugin({
  filename: '[name]/index.css',
  chunkFilename: '[id]/index.css',
});

const devMode = process.env.NODE_ENV !== 'production';
// console.log({ devMode, MiniCssExtractPlugin })

const plugins = [
  new AddStylesToDocumentPlugin(),
]

if (!devMode) {
  plugins.push(extractCSSPlugin);
}

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'web',
  entry: entryMap,
  externals: [
    'react', 'react-dom'
  ],
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          /**
           * Override the tsconfig file.
           */
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig-components.json'
            }
          },
        ],
        exclude: /node_modules/,
      },
      /**
       * CSS modules.
       */
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  output: {
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        test: /\.[cm]?js$/,
      }),
    ],
  },
  devtool: 'source-map',
}

const componentNames = componentEntries.map(
  (entry) => path.basename(entry).replace(/\.((js|ts)x?)/i, '')
);

let tsExports = '';
let esmExports = '';
let cjsExports = '';

for (const name of componentNames) {
  cjsExports += `exports.${name} = require('./${name}/index.js')\n`;
  tsExports += `import ${name} from './${name}'\n`;
  esmExports += `import ${name} from './${name}/index.js'\n`;
}

const namedExports = `export { ${componentNames.join(', ')} }\n`;
const defaultNamedExport = `export default { ${componentNames.join(', ')} }\n`;

tsExports += '\n'
esmExports += '\n'

tsExports += namedExports
tsExports += defaultNamedExport

esmExports += namedExports
esmExports += defaultNamedExport

if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync('dist/index.ts', tsExports);
fs.writeFileSync('dist/index.mjs', esmExports);
fs.writeFileSync('dist/index.js', cjsExports);