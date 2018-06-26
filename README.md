# Learning Webpack
In this repository you'll find most of my experimentation projects that I've used to learn Webpack.  
I've used Webpack 4 for all of these small projects so there might be some Webpack 4 specific features in there.

## First Attempt
In the `master` branch you'll find the [first-attempt](https://github.com/Serializator/learning-webpack/tree/master/first-attempt) folder.  
What this folder contains is, at it says, my first attempt at a Webpack based project.  
It's really basic and it only does stuff with JavaScript and does not yet use any loaders or plugins.

In my first attempt at understanding Webpack I've used [riittagirl](https://hackernoon.com/@riittagirl) her [article on Medium](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1) about Webpack 4 and how to configure it the right way in combination with some of [the guides](https://webpack.js.org/guides) on Webpack their website.

### Babel
[In the article on Medium that I mentioned earlier](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1), Babel is used to [transpile ES6 into ES5](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1#086d) for browser compatibility reasons. I didn't include this part in my first attempt because I don't like the fact that I'd be using an unknown tool in the process of learning another tool.

#### Why I specifically say "tool"
I don't have a problem with using something like the css-loader in combination with the sass-loader in the learning process, even though I don't know sass itself in-depth, what I do know os that the sass-loader is used for a single purpose, transpiling sass into css so that the output can be interpreted by the css-loader. Babel (and the babel-loader) have a lot more different purposes and use cases than only transpiling ES6 into ES5, it even has its own configuration file.


### Minifying CSS
I decided that I wanted to minify my CSS (transpiled from Sass) when I use the "production" mode.  
It was actually much more simple than I thought it would be, it was a single option `minimize` that I had to set to `true` in the `options` object from the css-loader.

I did find something about the css-loader and its `minimize` option that it's [per included file, not global](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/434#issuecomment-282664707), I don't exactly know what this means right now but I'll keep an eye out in case it comes up in the future.

### Webpack Clean Plugin
I couldn't decide what name I should use for the extracted css and output file, so whenever I changed them I had to delete the old files manually from the `dist` folder, this became quite tiresome because of my ridiculous indecisiveness.  

Instead of changing my approach of being ridiculous indecisiveness I decided to pull in the `webpack-clean-plugin`. What this plugin does and how I configured it is delete everything in the `dist` folder except the `index.html`.

In the near future the `index.html` will also be deleted, but this will only happen once I use a template in the `src` folder that is populated and copied to the `dist` folder using the `html-webpack-plugin`, but for now I'll keep it in `dist`.

## All Resources
- [Webpack Guides](https://webpack.js.org/guides/)
- [A tale of Webpack 4 and how to finally configure it in the right way](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1) by [riittagirl](https://hackernoon.com/@riittagirl)