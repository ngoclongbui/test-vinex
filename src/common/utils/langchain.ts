import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  openAIApiKey: process.env.REACT_APP_OPEN_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0
});

export const chatbotAPI = async (message: string) => {
  const res = await model.invoke([new HumanMessage({ content: message })]);
  return res.content.toString()
}
