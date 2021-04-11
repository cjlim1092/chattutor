// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMesage = this.createChatBotMessage("Hi there")
        this.updateChatbotState(greetingMesage)
    };

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on Javascript:",
          {
            widget: "javascriptLinks",
          }
        );
    
        this.updateChatbotState(message);
      };
    

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, 
            messages:[...prevState.messages, message]
        }));
    }
    
  }
  
  export default ActionProvider;