const path = require("path");

module.exports = {
    entry: {
        content_scripts: "./dist/content.js",
        background_scripts: "./dist/background.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/index.js",
    },
};