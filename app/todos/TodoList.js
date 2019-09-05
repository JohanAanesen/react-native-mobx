import React, {useEffect, useContext, useState} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Bottom,
  Text,
  Button,
  Form,
  Input,
  Item,
} from 'native-base';
import {todoContext} from './todo-context';
import {useObserver} from 'mobx-react-lite';

export default function TodoList() {
  const todoStore = useContext(todoContext);

  const [title, setTitle] = useState('');

  useEffect(() => {
    onLoadTodos();
  }, []);

  const onLoadTodos = async () => {
    await todoStore.getTodos();
  };

  return useObserver(() => (
    <Container>
      <Content>
        <List>
          {todoStore.todos.map(t => (
            <ListItem>
              <Left>
                <Text>{t.title}</Text>
              </Left>
              <Right>
                <Button danger onPress={() => todoStore.deleteTodo(t.id)}>
                  <Text>Delete</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
        <Item>
          <Input
            placeholder="Todo"
            value={title}
            onChangeText={text => {
              setTitle(text);
            }}
          />
        </Item>
        <Button onPress={() => todoStore.addTodo({title})}>
          <Text>Add Todo</Text>
        </Button>
      </Content>
    </Container>
  ));
}
