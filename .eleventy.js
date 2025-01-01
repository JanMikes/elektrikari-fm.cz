export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js",
        "src/images": "images"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
