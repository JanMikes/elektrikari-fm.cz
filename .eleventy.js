export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/favicon": "/",
        "src/images": "images/",
        "node_modules/bootstrap/dist/js": "js/",
        "node_modules/glightbox/dist": "glightbox/"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
