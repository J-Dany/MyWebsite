const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { distJsPath, jsEntrypoint } = require("./lib/paths");

/**
 * @param {"development"|"production"} mode 
 */
module.exports = (mode) => {

    if (mode !== "development" && mode !== "production")
        throw new Error(`'${mode}' not recognized! Accepted values: 'development', 'production'`);

    return {
        mode: mode,
        entry: jsEntrypoint,
        output: {
            path: path.resolve(distJsPath),
            filename: "[name].js"
        },
        optimization: {
            minimize: mode === "production",
            minimizer: [
                new TerserPlugin()
            ]
        },
        module: {
            rules: [
                {
                    test: /^.(js|jsx|ts|tsx)$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/env",
                                ["@babel/preset-react", { runtime: "automatic" }],
                                ["@babel/preset-typescript", { allowDeclareFields: true }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'javascript/auto',
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            }
                        },
                    ],
                },
            ]
        }
    };
};
