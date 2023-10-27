import React, { useState, useEffect } from 'react';
import './dataDisplay.css'

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data') // Make sure the URL matches your Express server configuration
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <h1>Data from SQLite</h1>
      <table>
  <thead>
    <tr>
      <th className="first-column">First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
      <tr key={item.id}>
        <td className="first-column">{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default DataDisplay;
