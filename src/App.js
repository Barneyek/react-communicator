import React , { useEffect, useState } from 'react';
import './index.css';
import db from './config';
import Message from './components/Message/Message';
import MessageForm from './components/MessageForm/MessageForm';

export default function App() {
  const [newUser, setNewUser] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.ref('/messages').on('value',(snapshot) => {
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(
        ([id, message]) => ({
          ...message,
          id
        })
      ); //Zamienia obiekt w tablice, czasami moze dostać pusty obiekt dlatego {}
      setMessages(convertedMessages);
    });
    }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user : newUser,
      content: newMessage,
      datetime: Date.now()
    };
    
    if (newMessage) {
     db.ref('/messages').push(messageObj);
    }

    setNewMessage("");
    setNewUser("");
  }

  return (
    <div className="App">
      <div className="container">
        <MessageForm
          user = {newUser.user}
          message = {newMessage.content}
          handleSubmit = {handleSubmit}
          handleContentChange = {setNewMessage}
          handleUserChange = {setNewUser}
        />
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
