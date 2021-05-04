This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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
