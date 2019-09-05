import React from 'react';
import RootNavigation from './root-navigation';
import { TodoProvider } from '../todos/todo-context';

export default function NavigationWrapper() {
    return (
        <TodoProvider>
            <RootNavigation />
        </TodoProvider>
    );
}