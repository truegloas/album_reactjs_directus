import React from 'react';
import './Content_Table.css';
import Viewer from './Viewer';

function Content_Table() {
    return (
        <div className='content-table'>
            <Viewer />
            <Viewer />
        </div>
    )
}

export default Content_Table;