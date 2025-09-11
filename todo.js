import { BTN_STYLE, SCREEN_STYLE } from "./style.js"
import { TODO_ICON, TRASH_ICON } from "./svg.js"
import { createStorage } from './storage.js'

// ============================================================================
export function toggleTodoScreen(storage) {
  // !!! DO NOT CHANGE
  const SCREEN_ID = `my-simple-todo-screen`

  // if already open → close it
  const existing = document.querySelector(`#${SCREEN_ID}`);
  if (existing) {
    // @ts-ignore
    existing.parentElement.remove(); // remove overlay
    return;
  }

  // inject styles (only once)
  if (!document.querySelector(`#${SCREEN_ID}-style`)) {
    const screenStyle = document.createElement('style');
    screenStyle.id = `${SCREEN_ID}-style`
    screenStyle.textContent = SCREEN_STYLE
    document.head.appendChild(screenStyle);
  }

  // Create overlay
  const overlay = document.createElement('div')
  overlay.id = 'my-simple-todo-overlay'

  // Create screen
  const screen = document.createElement('div')
  screen.id = 'my-simple-todo-screen'

  // titleDiv
  const titleDiv = document.createElement('div')
  titleDiv.id = 'my-simple-todo-screen-title-div'
  screen.appendChild(titleDiv)

  // titleDiv h1
  const titleHeader = document.createElement('h1')
  titleHeader.innerText = 'Project Todo'
  titleDiv.appendChild(titleHeader)

  // titleDiv shortcut tips
  const tips = document.createElement('span')
  tips.innerHTML = 'Press <span id="special">`</span> to close'
  titleDiv.appendChild(tips)

  // titileDiv close button
  const close = document.createElement('button')
  close.id = 'my-simple-todo-screen-close'
  close.innerText = 'x'
  tips.appendChild(close)


  // todo input div
  const inputDiv = document.createElement('div')
  inputDiv.id = 'my-simple-todo-screen-input-div'
  const input = document.createElement('input')
  input.id = 'my-simple-todo-screen-input'
  input.placeholder = 'Add a todo'
  inputDiv.appendChild(input)
  screen.appendChild(inputDiv)

  // input div enter
  const enter = document.createElement('button')
  enter.innerText = 'Enter'
  enter.id = 'my-simple-todo-screen-input-enter'
  inputDiv.appendChild(enter)

  // todo.isDone seperate tags
  const filterDiv = document.createElement('div')
  filterDiv.id = 'my-simple-todo-screen-filter-div'
  screen.appendChild(filterDiv)

  // Active Todo Tag
  const showActiveTodo = document.createElement('button')
  showActiveTodo.id = 'my-simple-todo-screen-filter-active'
  showActiveTodo.classList = 'filter-button'
  showActiveTodo.innerText = 'Active'
  filterDiv.appendChild(showActiveTodo)

  // Active Todo Tag
  const showCompletedTodo = document.createElement('button')
  showCompletedTodo.id = 'my-simple-todo-screen-filter-completed'
  showCompletedTodo.className = 'filter-button'
  showCompletedTodo.innerText = 'Completed'
  filterDiv.appendChild(showCompletedTodo)

  // Completed

  // todo list
  const list = document.createElement('div')
  list.id = 'my-simple-todo-screen-list'
  screen.appendChild(list)


  function renderTodoList(order = 'acs') {
    const todo = storage.getTodoList()
    const config = storage.getTodoConfig()

    // show todo
    list.innerHTML = '' // clean

    // render todo active / completed number
    if (showActiveTodo) {
      showActiveTodo.innerText = `Active (${todo.filter(t => t.isDone === false).length})`
      if (config.activeTag === 'active') {
        showActiveTodo.classList.add('active')
        showCompletedTodo.classList.remove('active')
      }
    }

    if (showCompletedTodo) {
      showCompletedTodo.innerText = `Completed (${todo.filter(t => t.isDone === true).length})`
      if (config.activeTag === 'completed') {
        showActiveTodo.classList.remove('active')
        showCompletedTodo.classList.add('active')
      }
    }

    if (todo.length === 0) {
      list.innerHTML = `<div class='empty-notice'>Todo list is empty.</div>`

    } else {
      let tempTodo = [...todo]

      // filter
      tempTodo = tempTodo.filter(todo => todo.isDone === (config.activeTag !== "active"))

      if (order === 'acs') {
        tempTodo.reverse();
      }

      if (tempTodo.length === 0) {
        list.innerHTML = `<div class='empty-notice'>${config.activeTag} list is empty.</div>`
        return
      }



      tempTodo.forEach(todo => {

        const todoItem = document.createElement('div')
        todoItem.className = 'simple-todo-item'

        // start div (checkbox)
        const startDiv = document.createElement('div')
        startDiv.className = 'start-div'
        todoItem.appendChild(startDiv)

        // middle div (title, date)
        const middleDiv = document.createElement('div')
        middleDiv.className = 'middle-div'
        todoItem.appendChild(middleDiv)

        // end div (delete)
        const endDiv = document.createElement('div')
        endDiv.className = 'end-div'
        todoItem.appendChild(endDiv)

        // checkbox div 
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.isDone
        startDiv.appendChild(checkbox)

        // title
        const todoTitle = document.createElement('p')
        todoTitle.className = 'simple-todo-title'
        todoTitle.innerText = todo.title
        middleDiv.appendChild(todoTitle)

        // Date
        const todoDate = document.createElement('span')
        todoDate.className = 'simple-todo-date'
        todoDate.innerText = new Date(todo.createTime).toLocaleString();
        middleDiv.appendChild(todoDate)

        // delete
        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'simple-todo-delete'
        deleteBtn.innerHTML = TRASH_ICON
        endDiv.appendChild(deleteBtn)


        // Todo item listener
        // check box : isDone
        checkbox.addEventListener('change', () => {
          storage.updateTodo(todo.id, todo.title, checkbox.checked)
          renderTodoList()
        })

        // Delete
        deleteBtn.addEventListener('click', () => {
          storage.removeTodo(todo.id)
          renderTodoList()
        })

        // append to list
        list.appendChild(todoItem)

      })
    }
  }
  renderTodoList()

  // List Listenr
  // Enter todo
  function enterTodo() {
    if (input && input.value.trim() !== '') {
      const todoTitle = input.value.trim()
      storage.addTodo(todoTitle)
      renderTodoList()
      input.value = '' // clear input 
    }
  }

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && list) {
      enterTodo()
    }
  })
  enter.addEventListener('click', () => {
    enterTodo()
  })


  // close on close button
  close.addEventListener('click', () => {
    overlay.remove()
  })


  // close when clicking on overly
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove()
  })

  // active / completed filter button
  showActiveTodo.addEventListener('click', () => {
    storage.saveTodoConfig({ activeTag: 'active' })
    renderTodoList()
  })

  showCompletedTodo.addEventListener('click', () => {
    storage.saveTodoConfig({ activeTag: 'completed' })
    renderTodoList()
  })


  // Append to body
  overlay.appendChild(screen)
  document.body.appendChild(overlay)

  // Auto focus input
  input.focus()
}


// ============================================================================
function createTodoButton({
  color = 'black',
  position = 'right',
  hasShortcuts = true, // eg: "`" to toggle todo creen
  storage,
}) {
  // !!! DO NOT CHANGE
  const BUTTON_ID = 'my-simple-todo-btn'

  // prevent duplicate button
  if (document.querySelector(`#${BUTTON_ID}`)) return;

  // inject styles (only once)
  if (!document.querySelector(`#${BUTTON_ID}-style`)) {
    const btnStyle = document.createElement('style');
    btnStyle.id = `${BUTTON_ID}-style`
    btnStyle.textContent = BTN_STYLE
    document.head.appendChild(btnStyle);
  }

  // create button
  const todoBtn = document.createElement('button');
  todoBtn.id = BUTTON_ID;
  todoBtn.innerHTML = TODO_ICON

  // customize button
  todoBtn.style.color = color

  switch (position) {
    case 'left':
      todoBtn.style.left = '20px'
      todoBtn.style.right = ''
      break
    case 'right':
      todoBtn.style.left = ''
      todoBtn.style.right = '20px'
    default:
      todoBtn.style.left = ''
      todoBtn.style.right = '20px'
      break
  }

  // Listener ===============================
  if (hasShortcuts) {
    document.addEventListener('keyup', (e) => {
      if (e.key === '`') toggleTodoScreen(storage)
    })
  }

  todoBtn.addEventListener('click', () => {
    toggleTodoScreen(storage)
  })

  document.body.appendChild(todoBtn);
}


export default function init({
  storageName, // required;
  color = 'black',
  position = 'right',
  hasShortcuts = true, // eg: "`" to toggle todo creen
}) {
  if (!storageName.trim()) {
    throw new Error('Missing storage name to create local storage for todo list.')
  }
  // Create storage
  const storage = createStorage(storageName)

  // Create todoButton
  createTodoButton({
    color,
    position,
    hasShortcuts,
    storage
  })
}


