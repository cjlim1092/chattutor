import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  return (
    <div className="App">
      <div style ={{maxWidth: "300px"}}></div>
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
        
      </header>
    </div>
  );
}

export default App;
