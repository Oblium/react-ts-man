module.exports = {
    "presets": [
        ["@babel/env", {
            "useBuiltIns": "entry",
            "modules": false
        }],
        "@babel/react",
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
};