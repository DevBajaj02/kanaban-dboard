import React from 'react';
import Ticket from './Ticket';

const Board = ({tickets, users, grouping, sort}) =>{
    console.log(tickets);
    return(
        <div>
           {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} users={users} />
      ))}
        </div>
    );
}

export default Board;