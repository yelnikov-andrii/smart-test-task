import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Header from './components/Header';
import { UserI } from './types';

function App() {
  const [data, setData] = useState<UserI[]>([]);

  async function getDataFromServer() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>
          List of users:
        </h1>
        <Table
          data={data}
        />
      </div>
    </>
  );
}

export default App;
