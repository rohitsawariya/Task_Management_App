import React from 'react'
import styles from './Items.module.css';

function Items({ todoName, todoDate, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today).setDate(new Date().getDate() + 1);

    if (date === today) {
        return "Today";
    } else if (date === tomorrow) {
        return "Tomorrow";
    } else {
        return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }
};


    return (
        <div className={`${styles.set} flex flex-wrap p-2`}>
  <div className="w-full sm:w-1/4 m-2 mx-9 text-white px-5 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
    {todoName}
  </div>

  <div className="w-full sm:w-1/4 m-2 mx-8 px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
    {formatDate(todoDate)}
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