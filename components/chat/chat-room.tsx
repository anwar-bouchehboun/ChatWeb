"use client"

import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"

export function ChatRoom() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  )
}
