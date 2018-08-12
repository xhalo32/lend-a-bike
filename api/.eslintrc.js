module.exports = {
    "rules": {
        "no-console": 0,
        "no-unused-vars": ["error", {
            "varsIgnorePattern": "^_+",
            "argsIgnorePattern": "^_+",
        }],
        "no-control-regex": 0,
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    },
    "extends": "airbnb-base",
};
