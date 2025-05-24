"use client"

import type React from "react"

import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function MessageInput() {
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const { user } = useAuth()

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim() || !user || sending) return

    setSending(true)

    try {
      await addDoc(collection(db, "messages"), {
        text: message.trim(),
        userId: user.uid,
        userName: user.displayName || "Anonymous",
        userPhoto: user.photoURL || "",
        timestamp: serverTimestamp(),
      })

      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={sendMessage} className="border-t bg-white p-4">
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={sending}
          className="flex-1"
        />
        <Button type="submit" disabled={!message.trim() || sending} size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </form>
  )
}
