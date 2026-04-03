import { useState, useEffect } from 'react';

function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const fetchItems = () => {
    fetch(`${apiUrl}/api/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error fetching items", err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description })
    })
    .then(res => res.json())
    .then(() => {
      setName('');
      setDescription('');
      fetchItems();
    })
    .catch(err => console.error("Error posting item", err));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Quản  Lý Item</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Name: </label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Description: </label>
          <input 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            style={{ marginBottom: '10px' }}
          />
        </div>
        <button type="submit">Thêm Item</button>
      </form>

      <h2>Danh sách Items từ Database</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
