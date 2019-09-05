import {createAppContainer} from 'react-navigation';
import TodoList from '../todos/TodoList';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    todoList: {
      screen: TodoList,
      navigationOptions: () => ({
        title: 'Mobx React Lite',
      }),
    },
  },
  {
    initialRouteName: 'todoList',
  },
);

const RootNavigation = createAppContainer(MainNavigator);
export default RootNavigation;
