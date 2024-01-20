import React from 'react';

const DisplayOptions = ({ grouping, setGrouping, sort, setSort }) => {
    const handleGroupingChange = (e) => setGrouping(e.target.value);
    const handleSortChange = (e) => setSort(e.target.value);

    return (
    <div className='display-options'>
        <label>
            Group By:
            <select value={grouping} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
            </select>
        </label>
        <label>
            Sort By:
            <select value={sort} onChange={handleSortChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
        </label>
    </div>);
}

export default DisplayOptions;