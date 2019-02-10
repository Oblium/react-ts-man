const path = require("path");

const SRC = path.resolve(__dirname, "src");
const PUBLIC = path.resolve(__dirname, "public");

module.exports = {
    entry: {
        main: path.resolve(SRC, "index.tsx")
    },
    output: {
        path: PUBLIC,
        filename: "[name].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /([tj])sx?/,
                use: "babel-loader"
            }
        ]
    }
};