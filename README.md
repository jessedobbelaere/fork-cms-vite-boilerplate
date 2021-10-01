<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://github.com/forkcms/forkcms">
      <img width="200" height="200" src="https://i.imgur.com/oh7i1rX.png">
  </a>
  <a href="https://vitejs.dev/">
    <img width="200" height="200" vspace="" hspace="25" src="https://vitejs.dev/logo.svg">
  </a>
  <h1>Fork CMS theme boilerplate using Vite</h1>
</div>

![CI](https://github.com/jessedobbelaere/fork-cms-vite-boilerplate/actions/workflows/ci.yml/badge.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

Allows the use of the Vite.js next generation frontend tooling with Fork CMS.

Simple, opiniated and performance-optimized boilerplate for Fork CMS themes supporting Typescript, React, ESNext, TailwindCSS, PostCSS, Dynamic Imports and Hot Module replacement using [Vite](https://vitejs.dev).

---

## Vite Overview

> Next Generation Frontend Tooling

Vite (French word for "fast", pronounced `/vit/`) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:

-   A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
-   A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

**Features of Vite** include:

-   💡 Instant Server Start
-   ⚡️ Lightning Fast HMR
-   🛠️ Rich Features
-   📦 Optimized Build
-   🔩 Universal Plugin Interface
-   🔑 Fully Typed APIs

This codebase helps to create a bridge between Fork CMS/Twig and the next generation frontend build tool Vite.js using the `ViteAssetExtension.php`.

`ViteAssetExtension` allows for Hot Module Replacement (HMR) of JavaScript, CSS, and Twig (even through errors) during development, as well as optimized production builds. `ViteAssetExtension` supports both modern and legacy bundle builds. `ViteAssetExtension` also handles generating the necessary <script> and <link> tags to support both synchronous and asynchronous loading of JavaScript and CSS.

## ✨ Opiniated list of features I want Vite to do

-   [x] Code splitting with Dynamic Imports support aka lazy loading. Load only the code/resources needed when they are needed, without render blocking.
-   [x] Development/Production. In local dev I want fast builds via the in-memory server, and for production builds I want every possible optimization.
-   [x] Hot Module Replacement (HMR) during local dev. As I make changes to my Javascript, CSS or templates I want the webpage to seamlessly refresh. This speeds development tremendously: just say no to the Reload button. Even Twig error pages are reloaded after making a code change!
-   [x] Dynamic Code Splitting. I don't want to manually define Javascript chunks in a config file. Vite needs to sort that out for me.
-   [x] Cache busting via manifest.json. This allows us to set a long expiry date for static assets, while also ensuring that they are automatically cache busted if they change.
-   [x] [Typescript](https://www.typescriptlang.org/) support.
-   [x] ESNext support out of the box.
-   [x] [React](https://reactjs.org/) support. Depending on the project, I either choose Vanilla Typescript, AlpineJS or React.
-   [x] [PostCSS](https://postcss.org/). Think of it as the Babel of CSS, to add advanced features to CSS, or use upcoming CSS features now.
-   [x] [Tailwind CSS](https://tailwindcss.com/). While I have used BEM/ITCSS for years, I started to love the advantages of utility-css and rapidly building UI's without leaving your html code, without naming things, and without browsing endless files of css to find conflicting rules. Very opiniated choice though ;-)
-   [x] [PurgeCSS](http://github.com/FullHuman/purgecss) scans the theme folder for classnames that are actually used, and removes the unused styles, causing a very small css file to be generated! Perfect for tailwind css. This is built into Tailwind nowadays.
-   [x] [Prettier](https://prettier.io/) 💄 to automatically format js/css/html code.
-   [x] [ESLint](https://eslint.org/) to statically analyze and help find problems in the js/ts code.
-   [x] Critical CSS. This makes your initial page loads significantly faster.
-   [x] Modern & Legacy JS Bundles. I want to deploy modern JS modules to the 75%+ of browsers that support it, while gracefully providing a fallback legacy bundle for legacy browsers (with transpiled code and polyfills).

## 🔧 Installation

Just clone or download this repository into your Fork CMS Themes directory and start hacking away!

1. Copy this boilerplate to your `src/Frontend/Themes/MyThemeName` folder in your new Fork CMS project.
2. Configure the Twig `ViteAssetExtension` in Symfony:

```yaml
# app/config/config.yml
services:
    ...

    # Configure the twig extension for ViteJS to easily switch between dev and prod script tags
    Frontend\Themes\MyThemeName\ViteAssetExtension:
        autowire: true
        arguments:
            $environment: '%kernel.environment%'
            $includeReactRefreshShim: false
        tags:
            - { name: twig.extension }
            - { name: kernel.event_listener, event: kernel.exception }
```

and make sure to add your theme name in the namespace declaration inside `ViteAssetExtension.php`. We'll find a way to auto-register this extension in later versions of Fork CMS.

2. Install dependencies by running `npm install` in your theme directory.
3. Run `npm run build` for a production build and browse to your website. The Twig extension will include the production-optimized files in Twig, as found in the `dist/manifest.json`.
4. When doing local development, run `npm run dev` to start a dev server. Visit your normal local website url (e.g. http://localhost or http://mywebsite.test) because the Twig extension will detect that the dev server is running and include the Vite scripts.

### 📦 Available commands

-   `npm run build` - create a production-ready build in the `dist` folder.
-   `npm run dev` - start the vite-dev-server with HMR.
-   `npm run prettier` - Execute [Prettier](https://prettier.io/) on your JS/CSS files.
-   `npm run prettier-check` - Check for [Prettier](https://prettier.io/) on your JS/CSS files.
-   `npm run lint` - Lint your code using [ESLint](https://eslint.org/)

## Awesome Vite resources

-   https://grafikart.fr/tutoriels/vitejs-symfony-1895
-   https://sebastiandedeyne.com/vite-with-laravel/
-   https://github.com/lhapaipai/vite-bundle
-   https://nystudio107.com/docs/vite (thanks for the inspiration!)
