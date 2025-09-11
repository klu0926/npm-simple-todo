
export interface InitTodoOptions {
  storageName: string
  color?: string
  position?: 'left' | 'right'
  hasShortcuts?: boolean
}

export default function initTodo(options: InitTodoOptions): void
