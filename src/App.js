import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import DisplayOptions from './components/DisplayOptions'
import { fetchData } from './services/api';


function App() {
  const [tickets,setTickets]=useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sort, setSort] = useState('priority');
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      setUsers(data.users);
      setTickets(data.tickets);
    });
  }, []);

  console.log(tickets);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Board tickets={tickets} users={users} grouping={grouping} sort={sort} />
    </div>
  );
}

export default App;
