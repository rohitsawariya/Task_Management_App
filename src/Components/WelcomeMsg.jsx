import React, { useContext } from 'react'
import styles from './WelcomeMsg.module.css'
import { todoContext } from '../store/todoContext'

function WelcomeMsg() {
    const {todoList} = useContext(todoContext);
  return (
    todoList.length===0 && <h1 className={styles.set}>No Task Available. Enjoy Your Day</h1>
  )
}

export default WelcomeMsg