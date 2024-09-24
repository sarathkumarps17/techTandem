"use client";

import { Session } from "next-auth";

interface ChatProps {
  session: Session | null;
}
const Chat: React.FC<ChatProps> = ({ session }) => {
  console.log({ session });
  return <div>Chat</div>;
};

export default Chat;
