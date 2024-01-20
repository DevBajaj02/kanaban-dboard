import React from 'react';
import { IconContext } from 'react-icons';
import { FaRegCircle  , FaCheckCircle } from 'react-icons/fa';
import { FaCircleHalfStroke } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";


const Ticket = ({ ticket, users }) => {
  const assignedUser = users.find((user) => user.id === ticket.userId);

  // Map status to corresponding React icons
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return (
          <IconContext.Provider value={{ color: 'grey', size: '1.5em' }}>
              <FaRegCircle  style={{ marginRight: '5px' }} />
          </IconContext.Provider>
        );
      case 'In progress':
        return (
          <IconContext.Provider value={{ color: 'yellow', size: '1.5em' }}>
            <FaCircleHalfStroke  />
          </IconContext.Provider>
        );
      case 'Backlog':
        return (
          <IconContext.Provider value={{ color: 'hh', size: '1.5em' }}>
            <TbCircleDotted />
          </IconContext.Provider>
        );
      case 'Done':
        return (
          <IconContext.Provider value={{ color: 'blue', size: '1.5em' }}>
            <FaCheckCircle />
          </IconContext.Provider>
        );
      default:
        return status;
    }
  };

  return (
    <div className='ticket-card'>
      
        <p className="ticket-id">{ticket.id}</p>
        <div className="ticket-header">
        <p>{getStatusIcon(ticket.status)}</p>
        <span className='ticket-title'>
          {ticket.title}
        </span>
      </div>
    
      <p>Assigned to: {assignedUser ? assignedUser.name : 'Unassigned'}</p>
      
      {ticket.tag && ticket.tag.includes("Feature Request") && (
        <div className="feature-request">
          <div className="feature-box">
          <IconContext.Provider value={{ color: 'grey', size: '1.3em' }}>
              <GoDotFill  style={{ marginRight: '2px' }} />
          </IconContext.Provider>
            <p className="feature-label">Feature Request</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticket;
