import React from 'react'
import styles from './Form.module.css'
import { useRef, useContext } from 'react'
import { todoContext } from '../store/todoContext';

function Form() {
    // const itemObj = useContext(todoContext);
    // const addNewItems  = itemObj.addNewItems;
    const { addNewItems } = useContext(todoContext);


    const inputName = useRef();
    const inputDate = useRef();

    const handleAddButton = (event) => {
        event.preventDefault();
        const name = inputName.current.value;
        const date = inputDate.current.value;
        inputName.current.value = '';
        inputDate.current.value = '';
        addNewItems(name,date);
    }


    return (
        <form onSubmit={handleAddButton} className={`   bg-red ${styles.set} flex p-5 rounded-lg ml-2 shadow-lg w-full`} style={{ padding: "0px 0px 0px 0px" }}>

            <label className={`${styles.closenes} lock text-white font-semibold mb-2`}>TaskName: </label>
            <input
                ref={inputName}
                type="text"
                className={`${styles.closeness} text-xl w-1/2 m-2 text-black px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                placeholder="Enter your Task"
            />

            <label className={`${styles.closenes} block text-white font-semibold mb-2`}>Date: </label>
            <input
                ref={inputDate}
                type="date"
                className={`${styles.closeness} text-xl w-1/2 m-2 px-1 py-1 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
            />

            <button
                type="submit"
                placeholder="Enter your DueDate"
                className={`${styles.closenes} w-1/4 m-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300`}
            >
                Submit
            </button>
        </form>

    )
}

export default Form