import React from 'react'
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import FilterLinkContainer from "../containers/FilterLinkContainer";

const App = ()=> (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <FilterLinkContainer/>
    </div>
)

export default App
