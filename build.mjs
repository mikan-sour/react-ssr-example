import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssModulesPlugin from 'esbuild-css-modules-plugin';


// client bundle
await esbuild.build({
  entryPoints: ["./src/client/pages/welcome/client.tsx"],
  jsx: "automatic",
  bundle: true,
  minify: true,
  outfile: "public/welcome/index.js",
  loader:{'.scss':'file', '.svg':'file', '.ttf':'file'},
  plugins: [
    cssModulesPlugin(),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
});

// client bundle
await esbuild.build({
  entryPoints: ["./src/client/pages/login/client.tsx"],
  jsx: "automatic",
  bundle: true,
  minify: true,
  outfile: "public/login/index.js",
  loader:{'.scss':'file', '.svg':'file', '.ttf':'file'},
  plugins: [
    cssModulesPlugin(),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
});


// server
await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  target: ["node16"],
  outfile: "./build/app.js",
  loader:{'.scss':'file', '.svg':'file', '.ttf':'file'},
  plugins: [
    cssModulesPlugin(),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
});
