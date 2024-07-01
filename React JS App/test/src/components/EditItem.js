import React, { useState, useEffect } from 'react';

const EditItem = ({ currentItem, updateItem, cancelEdit }) => {
  const [rollNo, setRollNo] = useState(currentItem.rollNo);
  const [studentName, setStudentName] = useState(currentItem.studentName);
  const [email, setEmail] = useState(currentItem.email);
  const [subject, setSubject] = useState(currentItem.subject);
  const [marks, setMarks] = useState(currentItem.marks);

  useEffect(() => {
    setRollNo(currentItem.rollNo);
    setStudentName(currentItem.studentName);
    setEmail(currentItem.email);
    setSubject(currentItem.subject);
    setMarks(currentItem.marks);
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(currentItem.id, { rollNo, studentName, email, subject, marks });
  };

  return (
    <div className="edit-item">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={cancelEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default EditItem;
