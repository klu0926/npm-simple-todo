# Simple Todo Addon

[![npm version](https://img.shields.io/npm/v/@klu0926/todo.svg)](https://www.npmjs.com/package/@klu0926/todo)  
[![License: MIT](https://img.shields.io/npm/l/@klu0926/todo.svg)](LICENSE)

![Todo Screenshot](https://raw.githubusercontent.com/klu0926/npm-simple-todo/refs/heads/master/my-todo.png)

A simple floating todo list widget for your local development! Quickly toggle the todo panel with a floating button.  
You can also press <code>`</code> to toggle the todo list.

Todos are saved in **localStorage**, so they persist between sessions.

## ⚙️ Properties

| Option       | Type                  | Required | Default   | Description                                      |
| ------------ | --------------------- | -------- | --------- | ------------------------------------------------ |
| storageName  | `string`              | ✅ Yes   | —         | Unique key name for `localStorage`.              |
| color        | `string`              | ❌ No    | `"black"` | Button color (CSS valid color).                  |
| position     | `"left"` \| `"right"` | ❌ No    | `"right"` | Which side to place the floating button.         |
| hasShortcuts | `boolean`             | ❌ No    | `true`    | Enable toggle via backtick key (<code>`</code>). |

## 📦 Option 1: With Bundlers / Frameworks

This is the recommended way if you're using tools like **Vite**, **Webpack**, **React**, **Next.js**, etc. To install the package:

```bash
npm install @klu0926/todo
# or
yarn add @klu0926/todo
```

Once the package is installed, you can import it and initialize the todo widget:

```js
import todo from '@klu0926/todo'

todo({
  storageName: 'myApp',
  color: 'black',
  position: 'right',
  hasShortcuts: true,
})
```

### 🧪 Example in Next.js (App Router)

```js
'use client'

import { useEffect } from 'react'
import todo from '@klu0926/todo'

export default function Home() {
  useEffect(() => {
    todo({
      storageName: 'myApp',
      color: 'black',
      position: 'right',
      hasShortcuts: true,
    })
  }, [])

  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>
        Click the floating button or press <code>`</code> to toggle the todo
        panel.
      </p>
    </main>
  )
}
```

## 🌐 Option 2: Browser / CDN Usage (No bundler needed)

Load it directly in the browser via CDN:

```html
<script type="module">
  import todo from 'https://cdn.jsdelivr.net/npm/@klu0926/todo/index.js'

  todo({
    storageName: 'myApp',
    color: 'black',
    position: 'right',
    hasShortcuts: true,
  })
</script>
```

You don’t need to install anything if you just want to use it in plain HTML pages.

## 🔗 CDN Links

- Latest version (jsDelivr):  
  `https://cdn.jsdelivr.net/npm/@klu0926/todo/index.js`

- Specific version example:  
  `https://cdn.jsdelivr.net/npm/@klu0926/todo@1.0.9/index.js`

## 🚀 Why two usage modes?

Because developers work in different environments:

- **Bundlers/frameworks** (React, Vue, Next.js, etc.) need imports and benefit from npm/Yarn, type declarations, tree-shaking, etc.
- **Browser-only / simple static pages** can use CDN to include without build tools.

## 🧾 License

MIT © Kuo Yu Lu
