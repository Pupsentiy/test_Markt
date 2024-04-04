/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="./vite-env.d.ts" />

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
