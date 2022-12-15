const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/main.ts"),
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "js/[name]-[hash].js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html")
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".json", ".css", "less"], // 配置文件引入时省略后缀名
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@types": path.resolve(__dirname, "../types/index.d.ts")
    }
  },

  module: {
    rules: [
      { test: /.vue$/, use: "vue-loader" },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "style-resources-loader", // 使用变量 https://www.npmjs.com/package/style-resources-loader
            options: {
              patterns: [path.resolve(__dirname, "../src/assets/styles/index.less")],
              injector: "append"
            }
          }
        ]
      },
      {
        test: /\.(ts|js)$/, // 匹配规则 以ts结尾的文件
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: "asset/inline"
      }
    ]
  }
}
