import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css'

 export function ChatInput({chatMessages, setChatMessages}) {
          const [inputText, setinputText]= useState('');

          function saveInputText(event) {
            setinputText(event.target.value);
          }
          function sendMessage() {
            const newChatMessages= [
                ...chatMessages,{
                  message: inputText,
                  sender: 'user',
                  id: crypto.randomUUID()

                }
              ];
            setChatMessages(newChatMessages);

              const response = Chatbot.getResponse(inputText);
               setChatMessages([
                ...newChatMessages,{
                  message: response,
                  sender: 'robot',
                  id: crypto.randomUUID()

                }
              ]);

              setinputText('');

          }
          return (
            <div className = "chat-input-container">
            <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText}
            className = "chat-input"
             value={inputText}/>
            <button 
            onClick = {sendMessage}
            className = "send-button"
            >Send</button>
            </div>
          );
        }