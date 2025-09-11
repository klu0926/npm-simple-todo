# Npm Simple Todo Addon

![Todo Screenshot](https://raw.githubusercontent.com/klu0926/npm-simple-todo/refs/heads/master/my-todo.png)

A simple todo list for your local development process! It create a floating todo list toggle on your site, and you can toggle your todo list with ease.

You can also press <code>`</code> to toggle the todo list.

Todos are saved in **localStorage**, so they persist between sessions.

---

## 1. Install

```bash
npm install @klu0926/todo
```

## Usage (with bundler like Vite / Webpack)

```js
import init from 'my-simple-todo'

init({
  storageName: 'myApp', // required
  color: 'black',
  position: 'right',
  hasShortcuts: true,
})
```
Init property: 

- storageName (required) : unique name for localStorage key
- color (optional) : tobo button color, default black
- position (optional) : display on left / right, default to right
- hashShortcuts (optional) : allow toggle with ` key, default to true


## ⚡ Usage with Next.js (App Router)

```js
"use client";

import { useEffect } from "react";
import todo from "@klu0926/todo";

export default function Home() {
  useEffect(() => {
    todo({
      storageName: "myApp",
      color: "black",
      position: "right",
      hasShortcuts: true,
    });
  }, []);

  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>Click the floating button to open the todo panel.</p>
    </main>
  );
}
```
