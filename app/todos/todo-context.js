import React, {createContext} from 'react';
import {useLocalStore} from 'mobx-react-lite';
import {getTodos, deleteTodo} from './todo-service';

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
        try {
            await deleteTodo(id);
        } catch (e){
            alert(e.message);
        }
    }
  }));

  return <todoContext.Provider value={store}>{children}</todoContext.Provider>;
};
