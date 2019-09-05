import http from '../http.service.js';
import {BaseUrl} from '../api-config';

export async function getTodos() {
  return await http.get(BaseUrl.todosAndroid);
}

export async function getTodoById(id) {
  return await http.get(`${BaseUrl.todosAndroid}${id}`);
}

export async function postTodo(newTodo) {
  return await http.post(BaseUrl.todosAndroid, newTodo);
}

export async function putTodo(editedTodo) {
  return await http.put(`${BaseUrl.todosAndroid}${editedTodo.id}`, editedTodo);
}

export async function deleteTodo(id) {
  return await http.delete(`${BaseUrl.todosAndroid}${id}`);
}
