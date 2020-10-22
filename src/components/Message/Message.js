import React from 'react';
import "./Message.css";

function convertDate(timestamp) {
    const datetime = new Date(timestamp);
    return datetime.toLocaleTimeString('pl-PL');
}

function Message({message}) {
    return (
        <div className="message">
            <div className="message--user">{message.user}{" "} <span className="message--time">{convertDate(message.datetime)}</span></div>
            <div className="message--content">{message.content}</div>
        </div>
    )
};

export default Message;