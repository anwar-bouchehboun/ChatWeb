"use client"

import { useEffect, useState, useRef } from "react"
import { collection, query, orderBy, onSnapshot, type Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "@/hooks/use-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  userId: string
  userName: string
  userPhoto: string
  timestamp: Timestamp | null
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])
  const { user } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages: Message[] = []
      snapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() } as Message)
      })
      setMessages(newMessages)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const formatTime = (timestamp: Timestamp | null) => {
    if (!timestamp) {
      return "Sending..."
    }
    return timestamp.toDate().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwnMessage = message.userId === user?.uid

        return (
          <div key={message.id} className={cn("flex gap-3", isOwnMessage ? "flex-row-reverse" : "flex-row")}>
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src={message.userPhoto || "/placeholder.svg"} alt={message.userName} />
              <AvatarFallback>{message.userName.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className={cn("flex flex-col max-w-xs sm:max-w-md", isOwnMessage ? "items-end" : "items-start")}>
              <div
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  isOwnMessage ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900",
                )}
              >
                {message.text}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <span>{message.userName}</span>
                <span>•</span>
                <span>{formatTime(message.timestamp)}</span>
              </div>
            </div>
          </div>
        )
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}
