module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ["."],
                extensions: [".ts", ".tsx", ".jsx", ".js"],
                alias: {
                    "@api": "./src/api",
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@hooks": "./src/hooks",
                    "@models": "./src/models",
                    "@navigation": "./src/navigation",
                    "@screens": "./src/screens",
                },
            },
        ],
    ],
};
