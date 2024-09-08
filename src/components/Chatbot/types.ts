import { TFunction } from "i18next";

export type ChatBoxProps = {
  title: string,
  id: string
  t: TFunction
}

export type Message = {
  user: string;
  bot: string;
};

export type TypingMessageProps = {
  id: string
  sendMessage: (message: string) => Promise<void>
  t: TFunction
}