# Vue.js from scratch with Webpack
At the same time that I've been learning about Webpack, I've digged deeper and deeper into Vue.js, and Single-File Components (SFCs) in Vue.js are in my opinion critical to keep everything separated with clean, well defined bounderies.

As you may or may not know, Vue.js has a [command line tool](https://cli.vuejs.org/) that developers can use to simplify setting up a Vue.js project, but even though I like the simplicy of it, I don't like that fact that I don't know how it actually works. It's a magical tool to me that does magical things to make my life magical, because of that I decided to use it as an opportunity to learn something more about Webpack and at the same time demystify the [Vue.js CLI tool]((https://cli.vuejs.org/)).

## Single-File Components & Loader Inference
In Vue.js there are things called [Single-File Components](https://vuejs.org/v2/guide/single-file-components.html), an SFC for short. In Vue.js these are files with the `.vue` extension. An SFC consists of three types of top-level "language blocks": 

- template tags (`<template>` & `</template>`) for HTML
- script tags (`<script>` & `</script>`) for JavaScript
- style tags (`<style>` & `</style>`) for CSS.
- any custom tags you might want to define

```
<template>
    <h1>{{ message }}</h1>
</template>

<script>
    export default {
        data: () => ({
            message: 'Hello, World!'
        })
    };
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
```

These individual language blocks in an SFC don't have extensions like regular HTML, JavaScript and CSS files. `vue-loader` uses a so called "Loader Inference" strategy [(the v15 strategy described below is not the same as the strategy used in v14)](https://vue-loader.vuejs.org/migrating.html#loader-inference).

### Template Blocks
A template block is extracted from an SFC and passed to the `vue-template-compiler` which pre-compiles it into a JavaScript render function which then gets injected into the exported component.

### Script Blocks
`vue-loader` infers that any script block consists of simple and pure JavaScript, because of this it will apply any rule that matches `.js`. 

A `babel-loader` can, for example, be used to transpile ES6 into ES5 so that you can still use the ES6 syntax inside your script blocks.

### Style Blocks
`vue-loader` infers that any style block consists of simple and pure CSS, because of this it will apply any rule that matches `.css`.

Same as for the script blocks, a `sass-loader` can, for example, be used to transpile Sass into CSS so that you can still use Sass inside your style blocks.

Any of the above can be changed by adding the `lang` attribute to the opening tag of the language block with the extension that you'd normally use for the file you'd apply the loaders to.

If you want to use Sass in your style block you'll have to add the appropriate rule to your Webpack config like you normally would:

```
{
    test: /\.s[a|c]ss$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader']
}
```

When you've done that you have to tell the `vue-loader` that you want your style block to be passed through the loaders you specified by applying the `lang` attribute to the opening tag of the style block with a value of `sass` or `scss`.

- `<style lang="sass">`
- `<style lang="scss">`

You might have seen that the array of loaders also contains a loader called the `vue-style-loader`, this loader adds the styling to the DOM.

## Wrapping it up
As you might have read, or even seen by the single headline, most of this little project was about the single-file components in Vue.js and how they made it from a file with a `.vue` extension to the bundled `main.js` (in my case `app.js`) file that is created by the Webpack configuration given to us by the Vue.js CLI tool.

In the future I expect to add some CSS extraction so that the CSS can be loaded in parallel with everything else and cache busting using the content hash, but before I'm going to do that I want to understand a bit more about what chunks are. 