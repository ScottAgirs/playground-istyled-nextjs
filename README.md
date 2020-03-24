<h1 align="center">Troubleshooting PrismJS + Next.js</h1>

The component is located at `/components/dataEntry/TextEditor/index.js`

## Clone PrismJS + SlateJS reproduction

From prismjs-slatejs branch

1. Clone [this repo](https://github.com/ScottAgirs/playground-istyled-nextjs)

```

git clone https://github.com/ScottAgirs/playground-istyled-nextjs.git prism-slate

```

2. Enter the directory

```

cd prism-slate

```

3. Install project dependencies
   `npm` or `yarn` - both have been tested, so can run either one!

`yarn install`

4. Run locally - everything will work as expected, markup preserved, syntax highlighted:

`yarn dev`

5. Run locally, but build first - the markup will be broken apart and collapsed into a single string, but won't be re-built.

`yarn build` >> `yarn start`

Starter project is live at: http://localhost:3000
