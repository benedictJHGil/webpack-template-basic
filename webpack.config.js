// import
const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
// const FaviconPlugin = require("favicons-webpack-plugin")

// export
module.exports = {
    // parcel main.js -> 비교하는 것은 적절치 않음
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: "./js/main.js",

    // 결과물(번들)을 반환하는 설정
    output: {
        // 설정 안해도 기본 동작
        // path: path.resolve(__dirname, "dist"),
        // filename: "main.js",
        clean: true
    },

    module: {
        rules: [
            {
                //test: /\.css$/,
                test: /\.s?css$/, // s가 있을 수 도 없을 수도 있는
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader" // 순서는 밑에서 위로  읽는다
                ]
            },
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "static" }
            ]
        }),
        // new FaviconPlugin({
        //     logo: "./favicon.ico"
        // })
    ],

    devServer: {
        host: "localhost"
    }
    // 없을 때는
    // <i> [webpack-dev-server] Loopback: http://localhost:8080/
    // <i> [webpack-dev-server] On Your Network (IPv4): http://220.79.56.101:8080/
    // 있을 때는
    // <i> [webpack-dev-server] Loopback: http://localhost:8080/, http://127.0.0.1:8080/
}