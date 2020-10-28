import React from 'react';
import "./MessageForm.css";

function MessageForm({ user, content, handleSubmit, handleContentChange, handleUserChange }) {
    return(
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                    <input
                        className="message-form--input"
                        type="text"
                        name="user"
                        placeholder="User"
                        value={user}
                        onChange={(event) => handleUserChange(event.target.value)}
                    />
                    <textarea
                        className="message-form--textarea"
                        type="text"
                        name="content"
                        placeholder="Write your message"
                        maxLength="250"
                        value={content}
                        onChange={(event) => handleContentChange(event.target.value)}
                    />
                <input className="message-form--button" type="submit" value="Send"/>
            </form>
        </div>
    )
};

export default MessageForm;