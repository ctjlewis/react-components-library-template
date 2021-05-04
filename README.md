This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# React Component Library

A template repository for developing a library of React components in real-time
using Next, then compiling and distributing them via NPM or another CDN. Automatically loads CSS module styles into DOM at runtime and handles
minification. **Leaves `react` and `react-dom` as external**. 

Just zip it and ship it with `yarn components` and `yarn publish`.

## Getting Started

All source files are in `src/`, and components are stored in `src/components`.
The folder should have the following structure:

```
src/components/
├── TestButton
│   ├── index.tsx
│   └── TestButton.module.css
└── TestHeading
    ├── index.tsx
    └── TestHeading.module.css
```

Where each component in `src/components/{component}` is bundled into `dist/` and
exported. The module should "just work" with ESM and CJS, default and named.

```js
/** ESM */

// named
import { TestButton, TestHeading } from "react-components-library-template";

// named (as default)
// ComponentLibrary.TestButton, ComponentLibrary.TestHeading
import ComponentLibrary from "react-components-library-template";

// submodule defaults
import TestButton from "react-components-library-template/TestButton";
import TestHeading from "react-components-library-template/TestHeading";
```

```js
/** CJS */

// named
const { TestButton, TestHeading } = require("react-components-library-template");

// named (as default)
// ComponentLibrary. TestButton, ComponentLibrary.TestHeading
const ComponentLibrary = require("react-components-library-template");

// submodule defaults
const TestButton = require("react-components-library-template/TestButton");
const TestHeading = require("react-components-library-template/TestHeading");
```

### Compiling

The components can be compiled into `dist/` with:

```
yarn components
```

### Developing

And the Next server can be started with:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. This example displays the live code alongside the compiled output, so
`yarn dev` will fail until `yarn components` is run unless `src/pages/index.tsx`
is modified.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

### Publishing

After components have been compiled to `dist/` with `yarn components`, you can
publish your package with:

```
yarn publish
```
