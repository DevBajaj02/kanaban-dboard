import React, { useState } from 'react';
import { IconContext } from 'react-icons';

import { MdDisplaySettings } from 'react-icons/md';

const DisplayOptions = ({ grouping, setGrouping, sort, setSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (e) => setGrouping(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <>
      <button className='display-button' onClick={() => setIsOpen(!isOpen)}>
        <IconContext.Provider value={{ size: '1.2em' }}>
          <MdDisplaySettings style={{ marginRight: '2px' }} />
        </IconContext.Provider>
        Display
      </button>

      {isOpen && (
        <div className='display-options-modal'>
          <div className='display-options'>
            <label>
              Group By:
              <select value={grouping} onChange={handleGroupingChange}>
                <option value='status'>Status</option>
                <option value='user'>User</option>
                <option value='priority'>Priority</option>
              </select>
            </label>
            <label>
              Sort By:
              <select value={sort} onChange={handleSortChange}>
                <option value='priority'>Priority</option>
                <option value='title'>Title</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayOptions;
