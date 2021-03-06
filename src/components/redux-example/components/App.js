import React from 'react'
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import FilterLinkContainer from "../containers/FilterLinkContainer";
import Footer from "./Footer";

const App = ()=> (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)

export default App
