import React from 'react';
import './Notifications.css';
// import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button
                style={{ position: 'absolute', right: 0 }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <span className='x' style={{ fontSize: '20px', fontWeight: '600' }}>X</span>
            </button>
        </div>
    );
}
