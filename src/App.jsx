import { useState, useContext } from 'react'
import styles from './App.module.css'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import Form from './Components/Form'
import ItemList from './Components/ItemList'
import { todoContext } from './store/todoContext'
import WelcomeMsg from './Components/WelcomeMsg'
import Footer from './Components/Footer'

function App() {
  const [todoList, setTodoList] = useState([]);
  const addNewItems = (itemName, itemDueDate) => {
    setTodoList((currentVal) => [{ name: itemName, date: itemDueDate }, ...currentVal,]
    );
  }

  const deleteItems = (itemName) => {
    setTodoList(todoList.filter(item => item.name !== itemName));
  };

  return (
    <todoContext.Provider value={{ todoList, addNewItems, deleteItems }}>
      <Navbar />
      <Container>
        <h1 className={`${styles.h1}`} >Tasks Management App</h1>
        <hr />
        <Form></Form>
        <WelcomeMsg />
        <ItemList ></ItemList>
      </Container>
      <Footer />
    </todoContext.Provider>
  )
}

export default App
