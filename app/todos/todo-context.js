import React, {createContext} from 'react';
import {useLocalStore} from 'mobx-react-lite';
import {getTodos, deleteTodo, postTodo} from './todo-service';

export const todoContext = createContext();
export const TodoProvider = ({children}) => {
  const store = useLocalStore(() => ({
    /* observables */
    todos: [],
    todo: {
      id: '',
      title: '',
    },
    isLoading: false,
    error: '',

    /* actions */
    async getTodos() {
      store.isLoading = true;

      try {
        store.todos = (await getTodos()).data;
      } catch (e) {
        alert(e.message);
      }

      store.isLoading = false;
    },

    async deleteTodo(id) {
      store.isLoading = true;
      try {
        await deleteTodo(id);
        const newTodoList = store.todos.filter(todo => todo.id !== id);
        store.todos = newTodoList;
      } catch (e) {
        alert(e.message);
      }
      store.isLoading = false;
    },

    async addTodo(todo) {
      store.isLoading = true;

      try {
        await postTodo(todo);
        store.todos = (await getTodos()).data;
      } catch (e) {
        alert(e.message);
      }

      store.isLoading = false;
    },
  }));

  return <todoContext.Provider value={store}>{children}</todoContext.Provider>;
};
