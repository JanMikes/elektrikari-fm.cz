module.exports = function(eleventyConfig) {
    // Copy CSS directory to output
    eleventyConfig.addPassthroughCopy("styles");

    // Copy Bootstrap JS to output (optional if you need JS features like modals)
    eleventyConfig.addPassthroughCopy({
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js"
    });

    return {
        dir: {
            input: "src",    // Your input folder (e.g., "src")
            output: "_site"  // Your output folder
        }
    };
};
