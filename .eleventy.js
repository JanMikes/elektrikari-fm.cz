export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/images": "images/",
        "src/favicon": "/",
        "src/robots.txt": "/robots.txt",
        "src/humans.txt": "/humans.txt",
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
