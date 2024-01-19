import React from 'react';

const Ticket = ({ticket, users}) => {
    const assignedUser = users.find((user) => user.id === ticket.userId);
    return (
        <div>
            <p>{ticket.title}</p>
            <p>Status: {ticket.status}</p>
      <p>Assigned to: {assignedUser ? assignedUser.name : 'Unassigned'}</p>
        </div>
    )
}

export default Ticket;