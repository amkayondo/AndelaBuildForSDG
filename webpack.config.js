const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const PUBLIC_PATH = "https://covid-19-estimator01.herokuapp.com";

module.exports = {
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "images/[hash]-[name].[ext]"
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new WebpackPwaManifest({
      name: "Covid-19 Estimator",
      short_name: "Covid-19 Estimator",
      description: "Covid-19 Estimator",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      crossorigin: "use-credentials",
      icons: [
        {
          src: path.resolve("src/assets/images/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons")
        }
      ],
      publicPath: PUBLIC_PATH
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: "my-domain-cache-id",
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: "service-worker.js",
        minify: true,
        navigateFallback: `${PUBLIC_PATH}index.html`,
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      }
    )
  ]
};
