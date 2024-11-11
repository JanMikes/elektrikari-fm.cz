module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/styles": "styles",
        "node_modules/bootstrap/dist/css/bootstrap.min.css": "styles/bootstrap.css",
        "node_modules/@webpixels/css/dist/index.css": "styles/webpixels.css",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
