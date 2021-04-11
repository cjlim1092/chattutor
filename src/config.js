import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
    botname: "LearningBot",
    initialMessages: [createChatBotMessage("What would you like to learn today?", {
        widget: "learningOptions"
    })],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url:
                          "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 1,
                      },
                      {
                        text: "Mozilla JS Guide",
                        url:
                          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2,
                      },
                      {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3,
                      }, 
                ]
            }
        },
    ],
  customStyles: {
      botMessageBox: {
          backgroundColor: "#376B7E",
      },
      chatButtion: {
          backgroundColor: "#376B7E",
      },
  },
}

export default config