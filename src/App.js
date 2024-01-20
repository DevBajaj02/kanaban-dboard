import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import DisplayOptions from './components/DisplayOptions'
import { fetchData } from './services/api';


function App() {

  const initialGrouping = localStorage.getItem('grouping') || 'status';
  const initialSort = localStorage.getItem('sort') || 'priority';

  const [tickets,setTickets]=useState([]);
  const [grouping, setGrouping] = useState(initialGrouping);
  const [sort, setSort] = useState(initialSort);
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      setUsers(data.users);
      setTickets(data.tickets);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sort', sort);
  }, [grouping, sort]);

  console.log(tickets);

  return (
    <div >
      <h1>Kanban Board</h1>
      <DisplayOptions
        grouping={grouping}
        setGrouping={setGrouping}
        sort={sort}
        setSort={setSort}
      />
      <Board tickets={tickets} users={users} grouping={grouping} sort={sort} />
    </div>
  );
}

export default App;
