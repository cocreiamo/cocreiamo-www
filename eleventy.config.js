import { createHash } from 'crypto';
import { readFileSync } from 'fs';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });

  eleventyConfig.addGlobalData("cssHash", () => {
    const css = readFileSync("./src/assets/css/site.css");
    return createHash("sha256").update(css).digest("hex").slice(0, 8);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
