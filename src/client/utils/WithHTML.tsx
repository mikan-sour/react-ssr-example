import React from "react";

import { TAssetMap } from "../../types/shared";

export default function WithHTML({assetMap,children}:{assetMap:TAssetMap,children:React.ReactNode}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {
          assetMap.css.map((css, i) => (
            <link key={i} rel="stylesheet" href={css}></link>
          ))
        }
        <title>{assetMap.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

        