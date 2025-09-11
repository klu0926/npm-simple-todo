# Npm Simple Todo Addon

![Todo Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/106499794/488088446-13240de7-fe01-452b-b503-4550169c8eff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250911%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250911T012835Z&X-Amz-Expires=300&X-Amz-Signature=a70ef8c7af009acd21ded29f832b85bb879b86b5912a9812108d550aa3be9af9&X-Amz-SignedHeaders=host)

A simple todo list for your local development process! It create a floating todo list toggle on your site, and you can toggle your todo list with ease.

You can also press <code>`</code> to toggle the todo list.

Todos are saved in **localStorage**, so they persist between sessions.

---

## 1. Install

```bash
npm install @klu0926/todo
```

## 2. Usage

```js
import init from 'my-simple-todo'

init({
  storageName: 'myApp', // required
  color: 'black',
  position: 'right',
  hasShortcuts: true,
})
```

- storageName (required) : unique name for localStorage key
- color (optional) : tobo button color, default black
- position (optional) : display on left / right, default to right
- hashShortcuts (optional) : allow toggle with ` key, default to true
