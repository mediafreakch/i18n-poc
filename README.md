# How to install

1. Download repo
2. do `npm install`
3. run `npm run package`

Then open `index.html` in your browser and see the result.

Change the `index.html` file and include another locale from the dist directory (example `dist/fr.js`).

# How it works

1. `npm run package` will browserify your internal modules (located at `/src/node_modules`) and run `utility.js`. The latter will collect all locales for DE and FR separately and bundle them into a file each. They'll be exposed as a `window` global.
2. Once per project, inside the `app` component, we'll register a Handlebars helper that is used to lookup a given key from the locales exposed on `window`.
3. Within your component's view, you'll use the translation helper as follows:
```
{{t "button.press" }} // button.press is the key to lookup within window.APP.translations
```

# To be improved

- move template pre-compilation to server-side (now happening inside index.js of each internal component). Maybe using a browserify transform?
- don't expose locales as a window global. Using browserify -r -x args instead?
- make `utility.js` a component with a binary (so that others can simply call the binary inside their npm scripts)
- wait for roddeh/i18njs#2 to take i18njs from npmjs.org
