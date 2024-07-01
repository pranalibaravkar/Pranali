import React from 'react';

const ItemList = ({ items, editItem, deleteItem }) => {
  return (
    <div className="item-list">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Email ID</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.rollNo}</td>
              <td>{item.studentName}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
              <td>
                <button onClick={() => editItem(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
