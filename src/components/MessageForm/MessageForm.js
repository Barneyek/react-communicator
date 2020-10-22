import React from 'react';

function MessageForm({ content, handleSubmit, handleContentChange }) {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user"/>
                <input 
                    type="text"
                    name="content" 
                    value={content}
                    onChange={(event) => handleContentChange(event.target.value)} 
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};

export default MessageForm;