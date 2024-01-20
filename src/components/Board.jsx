import React from 'react';
import Ticket from './Ticket';

const Board = ({ tickets, users, grouping, sort }) => {

  if (!tickets || tickets.length === 0) {
    return (
      <div className="board-container">
        <p>Loading...</p>
      </div>
    );
  }
  // Grouping logic
  let groupedAndSortedTickets = [...tickets];

  if (grouping === 'user') {
    groupedAndSortedTickets = groupByUser(tickets, users);
  } else if (grouping === 'priority') {
    groupedAndSortedTickets = groupByPriority(tickets);
  } else if (grouping === 'status') {
    groupedAndSortedTickets = groupByStatus(tickets);
  }

  // Sorting logic
  if (sort === 'priority') {
    // Implement sorting by priority
    groupedAndSortedTickets = sortSectionsByPriority(groupedAndSortedTickets);
  } else if (sort === 'title') {
    // Implement sorting by title
    groupedAndSortedTickets = sortSectionsByTitle(groupedAndSortedTickets);
  }
console.log(groupedAndSortedTickets,777)
  return (
    <div
    className='board-container'
    >
    {Object.keys(groupedAndSortedTickets).map((groupName) => (
      <div 
      key={groupName}
      className='group-container'
      >
      <h2>{getPriorityLabel(groupName)}</h2>
      <p className="ticket-count">{groupedAndSortedTickets[groupName].length}</p>
        {Array.isArray(groupedAndSortedTickets[groupName]) ? (
          groupedAndSortedTickets[groupName].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))
        ) : (
          <Ticket key={groupedAndSortedTickets[groupName].id} ticket={groupedAndSortedTickets[groupName]} users={users} />
        )}
      </div>
    ))}
  </div>
  );
};

const groupByUser = (tickets, users) => {
  const groupedByUser = {};

  tickets.forEach((ticket) => {
    const assignedUser = users.find((user) => user.id === ticket.userId);
    const userName = assignedUser ? assignedUser.name : 'Unassigned';

    if (!groupedByUser[userName]) {
      groupedByUser[userName] = [];
    }

    groupedByUser[userName].push(ticket);
  });

  return groupedByUser;
};

const groupByStatus = (tickets) => {
    const groupedByStatus = {};
  
    tickets.forEach((ticket) => {
      const status = ticket.status || 'No Status';
  
      if (!groupedByStatus[status]) {
        groupedByStatus[status] = [];
      }
  
      groupedByStatus[status].push(ticket);
    });
  
    return groupedByStatus;
  };

const groupByPriority = (tickets) => {
  const groupedByPriority = {};

  tickets.forEach((ticket) => {
    const priorityLevel = ticket.priority || 0;

    if (!groupedByPriority[priorityLevel]) {
      groupedByPriority[priorityLevel] = [];
    }

    groupedByPriority[priorityLevel].push(ticket);
  });

  return groupedByPriority;
};

const sortSectionsByPriority = (groupedTickets) => {
    const result = {};
  
    // Sort each group by priority
    Object.keys(groupedTickets).forEach((group) => {
      const groupItems = Array.isArray(groupedTickets[group])
        ? groupedTickets[group]
        : [groupedTickets[group]];
  
      const sortedGroup = groupItems.sort((a, b) => (b.priority || 0) - (a.priority || 0));
      result[group] = sortedGroup;
    });
  
    return result;
  };
  
  
  const sortSectionsByTitle = (groupedTickets) => {
    const result = {};
  
    // Sort each group by title
    Object.keys(groupedTickets).forEach((group) => {
      const sortedGroup = groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
      result[group] = sortedGroup;
    });
  
    return result;
  };
  
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case '4':
        return 'Urgent';
      case '3':
        return 'High';
      case '2':
        return 'Medium';
      case '1':
        return 'Low';
      case '0':
        return 'No priority';
      default:
        return priority;
    }
  };
  
export default Board;
