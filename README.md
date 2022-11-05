# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Overview

A Twitter Clone App Built in Nuxt3,Tailwind CSS,Prisma

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Config

Install `tailwind CSS`

```bash
npm i -d @nuxtjs/tailwindcss
```

Add the module in `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
```

Then init the `tailwind CSS`

```bash
npx tailwindcss init
```
