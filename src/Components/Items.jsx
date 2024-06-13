import React from 'react'
import styles from './Items.module.css';

function Items({ todoName, todoDate, onDelete }) {
    return (
        <div className={`${styles.set} flex flex-wrap p-2`}>
  <div className="w-full sm:w-1/4 m-2 mx-9 text-white px-5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
    {todoName}
  </div>

  <div className="w-full sm:w-1/4 m-2 mx-8 px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
    {todoDate}
  </div>

  <button
    type="submit"
    onClick={onDelete}
    className="w-full sm:w-1/5 m-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 duration-300">
    Delete
  </button>
</div>


    )
}

export default Items