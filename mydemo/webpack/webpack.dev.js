const webpack = require("webpack")
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        BASE_URL: "/api",
        UPLOAD_URL: "/upload",
        NODE_ENV: "development"
      })
    })
  ],
  devServer: {
    hot: true,
    port: 8080
    // proxy: {s
    //    '/': {
    //          target: 'http://localhost:8083/',
    //          secure: false
    //    }
    // }
  }
}
