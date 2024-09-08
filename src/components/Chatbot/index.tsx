import React, { useState } from "react";
import { ChatBoxProps, Message, TypingMessageProps } from "./types";
import { BotMessage, BotText, BoxInput, BoxMessage, ChatBoxContainer, Send, UserMessage } from "./styles";
import { SendOutlined, RobotOutlined } from "@ant-design/icons";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { chatbotAPI } from "../../common/utils/langchain";

const Chatbot: React.FC<ChatBoxProps> = ({ title, id, t }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string): Promise<void> => {
    try {
      const response = await chatbotAPI(message);
      setMessages((prevMessages) => [...prevMessages, { user: message, bot: response }]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: message, bot: "Something wrong, please try again later!" },
      ]);
    }
  };

  return (
    <ChatBoxContainer id={id}>
      <Slide direction="up" triggerOnce>
        <div>
          <h6>{t(title)}</h6>
          <BoxMessage>
            {messages.map((msg, index) => (
              <div key={index}>
                <UserMessage>{msg.user}</UserMessage>
                <BotMessage>
                  <RobotOutlined style={{ fontSize: "30px", color: "rgb(24, 33, 109)" }} />
                  <BotText>{msg.bot}</BotText>
                </BotMessage>
              </div>
            ))}
          </BoxMessage>
          <TypingMessage id={id} sendMessage={sendMessage} t={t} />
        </div>
      </Slide>
    </ChatBoxContainer>
  );
};

const TypingMessage: React.FC<TypingMessageProps> = ({ id, sendMessage, t }) => {
  const [msg, setMsg] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMsg(event.target.value);
  };

  const sending = () => {
    sendMessage(msg);
    setMsg("");
  };

  return (
    <BoxInput>
      <input
        name={`${id + "Input"}`}
        id={`${id + "Input"}`}
        type="text"
        placeholder={`${t("Ask me something")} ...`}
        value={msg}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") sending();
        }}
      />
      <Send disabled={!msg} onClick={() => sending()}>
        <SendOutlined />
      </Send>
    </BoxInput>
  );
};

export default withTranslation()(Chatbot);
