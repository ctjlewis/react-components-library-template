const fs = require('fs');
const path = require('path');
const glob = require('glob');

const AddStylesToDocumentPlugin = require('webpack-add-styles-to-document');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const ClosurePlugin = require('closure-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryMap = {}
const componentEntries = glob.sync(
  'src/components/*',
  {
    ignore: [
      'src/components/types.ts',
      'src/components/types.tsx',
    ]
  }
);

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
        test: /\.ts(x?)$/,
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

const componentNames = componentEntries.filter(
  (entry) => !(/types.ts(x?)/i.test(entry))
).map(
  (entry) => path.basename(entry).replace(/\.((js|ts)x?)/i, '')
);

let tsFile = '';
let esmFile = '';
let cjsFile = '';

for (const name of componentNames) {
  cjsFile += `exports.${name} = require('./${name}/index.js')\n`;
  tsFile += `import ${name} from './${name}'\n`;
  esmFile += `import ${name} from './${name}/index.js'\n`;
}

const namedExports = `export { ${componentNames.join(', ')} }\n`;
const defaultNamedExport = `export default { ${componentNames.join(', ')} }\n`;

tsFile += '\n'
esmFile += '\n'

tsFile += namedExports
tsFile += defaultNamedExport

/**
 * If type declarations exist from types.ts, export them in index.ts so they're
 * available at index.d.ts.
 */
if (
  glob.sync('src/components/types.*').some(
    (file) => /types.ts(x?)/i.test(file)
  )
) {
  tsFile += `export * from './types'`;
}

esmFile += namedExports
esmFile += defaultNamedExport

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.writeFileSync('dist/index.ts', tsFile);
fs.writeFileSync('dist/index.mjs', esmFile);
fs.writeFileSync('dist/index.js', cjsFile);