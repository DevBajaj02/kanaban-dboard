import React from 'react';
import Ticket from './Ticket';

const Board = ({ tickets, users, grouping, sort }) => {
  let groupedAndSortedTickets = [...tickets];

  // Grouping logic
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
    {/* Render grouped and sorted tickets */}
    {Object.keys(groupedAndSortedTickets).map((groupName) => (
      <div 
      key={groupName}
      className='group-container'
      >
        <h2>{groupName}</h2>
        {Array.isArray(groupedAndSortedTickets[groupName]) ? (
          // If it's an array, map over the tickets
          groupedAndSortedTickets[groupName].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))
        ) : (
          // If it's not an array, assume it's a single ticket
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
    const sortedSections = Object.keys(groupedTickets).sort((a, b) => {
      const maxPriorityA = Array.isArray(groupedTickets[a])
        ? Math.max(...groupedTickets[a].map((t) => t.priority || 0), 0)
        : groupedTickets[a]?.priority || 0;
  
      const maxPriorityB = Array.isArray(groupedTickets[b])
        ? Math.max(...groupedTickets[b].map((t) => t.priority || 0), 0)
        : groupedTickets[b]?.priority || 0;
  
      return maxPriorityB - maxPriorityA;
    });
  
    const result = {};
    sortedSections.forEach((section) => {
      result[section] = groupedTickets[section];
    });
  
    return result;
};

const sortSectionsByTitle = (groupedTickets) => {
  const sortedSections = Object.keys(groupedTickets).sort((a, b) => a.localeCompare(b));

  const result = {};
  sortedSections.forEach((section) => {
    result[section] = groupedTickets[section];
  });

  return result;
};

export default Board;
