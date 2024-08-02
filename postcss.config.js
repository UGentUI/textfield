import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
      safelist: {
        standard: [
          ":host",
          "form-control",
          "form-control-lg",
          "form-control-sm",
          "form-text",
          "is-valid",
          "is-invalid",
          "invalid-feedback",
        ], // Safelist patterns
      },
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
