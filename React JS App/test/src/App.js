import React, { useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import './App.css';

const App = () => {
  const initialData = [
    { id: 1, rollNo: '101', studentName: 'Pranali Baravkar', email: 'pranalibaravakar@gmail.com', subject: 'Biology', marks: 75 },
    { id: 2, rollNo: '102', studentName: 'Tejas Baravkar', email: 'tejasbaravkar12@gmail.com', subject: 'Science', marks: 89 },
    { id: 3, rollNo: '103', studentName: 'Suraj Baravkar', email: 'surajbaravkar@gmail.com', subject: 'History', marks: 92 },
    
  ];

  const [items, setItems] = useState(initialData);
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = (item) => {
    item.id = Date.now();
    setItems([...items, item]);
  };

  const editItem = (item) => {
    setCurrentItem(item);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    setCurrentItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const cancelEdit = () => {
    setCurrentItem(null);
  };

  return (
    <div className="App">
      <h1>CRUD Operations</h1>
      {currentItem ? (
        <EditItem
          currentItem={currentItem}
          updateItem={updateItem}
          cancelEdit={cancelEdit}
        />
      ) : (
        <AddItem addItem={addItem} />
      )}
      <ItemList items={items} editItem={editItem} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
