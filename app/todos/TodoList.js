import React, {useEffect, useContext} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Text,
  Button,
} from 'native-base';
import {todoContext} from './todo-context';
import {useObserver} from 'mobx-react-lite';

export default function TodoList() {
  const todoStore = useContext(todoContext);

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
      </Content>
    </Container>
  ));
}
