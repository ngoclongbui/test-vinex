import styled from "styled-components";

export const ChatBoxContainer = styled("div")`
  padding: 5rem 0;
  font-size: 18px;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const BoxMessage = styled("div")`
  margin-bottom: 5px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid rgb(24, 33, 109);
  padding: 1rem;
  border-radius: 6px
`;

export const UserMessage = styled("p")`
  font-size: 18px;
  padding: 1rem;
  margin-left: auto;
  width: fit-content;
  border-radius: 15px;
  background-color: rgb(241, 242, 243);
`;

export const BotMessage = styled("div")`
  display: flex;
  align-items: start;
`;

export const BotText = styled("p")`
  font-size: 18px;
  padding: 0 1rem;
`;

export const BoxInput = styled("p")`
  position: relative;
`;

export const Send = styled("button")`
  pointer-events:${(props) => props.disabled ? 'none' : null};
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  top: 50%;
  right: 0px;
  transform:  translate(-10px, -50%);
  border: none;
  background-color: white;
  border-radius: 50%;
  transition: all 0.4s;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;