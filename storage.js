export const createStorage = (storageName) => {
  const STORAGE_NAME = storageName.trim()
  if (STORAGE_NAME === '') {
    console.error('Storage need a name to create, please create storage again.')
    return
  }

  return {
    // !!! DO NOT CHANGE
    STORAGE_FULL_NAME: `my-simple-todo-list-${STORAGE_NAME}`,
    STORAGE_CONFIG_FULL_NAME: `my-simple-todo-list-${STORAGE_NAME}-config`,

    getTodoConfig() {
      const json = localStorage.getItem(this.STORAGE_CONFIG_FULL_NAME);
      const todoConfig = json ? JSON.parse(json) : {
        activeTag: 'active',
        sorting: 'acs',
      };
      return todoConfig;
    },

    saveTodoConfig({ activeTag, sorting }) {

      const todoConfig = this.getTodoConfig()
      const newConfig = { ...todoConfig }

      if (activeTag !== undefined) newConfig.activeTag = activeTag
      if (sorting !== undefined) newConfig.sorting = sorting

      localStorage.setItem(this.STORAGE_CONFIG_FULL_NAME, JSON.stringify(newConfig));

      return newConfig;
    },


    getTodoList() {
      const json = localStorage.getItem(this.STORAGE_FULL_NAME);
      const todoList = json ? JSON.parse(json) : [];
      return todoList;
    },

    updateTodo(id, title, isDone = false) {
      const todoList = this.getTodoList();
      const todo = todoList.find(todo => todo.id === id);

      if (!todo) {
        console.error(`Cannot find todo with ID ${id}`);
        return;
      }

      if (title.trim() !== '') {
        todo.title = title;
      }
      todo.isDone = isDone;
      todo.updateTime = Date.now();

      localStorage.setItem(this.STORAGE_FULL_NAME, JSON.stringify(todoList));
    },

    addTodo(title) {
      if (title.trim() === '') return;

      const newTodo = {
        id: crypto.randomUUID(),
        title,
        isDone: false,
        createTime: Date.now(),
        updateTime: Date.now()
      };

      const todoList = this.getTodoList();
      todoList.push(newTodo);

      localStorage.setItem(this.STORAGE_FULL_NAME, JSON.stringify(todoList));
    },

    removeTodo(id) {
      const todoList = this.getTodoList();
      const newList = todoList.filter(todo => todo.id !== id);

      if (newList.length === todoList.length) {
        console.error(`Cannot find todo with ID ${id}`);
        return;
      }
      localStorage.setItem(this.STORAGE_FULL_NAME, JSON.stringify(newList));
    }
  }

}