import { useState } from "react"
import ollama from "ollama/browser"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function Assistant({ coffees }) {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const coffeeList = coffees
        .map((coffee) => `- ${coffee.name} (${coffee.origin}), $${coffee.price}: ${coffee.description}`)
        .join("\n")

    const systemMessage = {
        role: "system",
        content: `You are a friendly assistant for "Coffee R Us", an online coffee shop. Help users with coffee questions and recommendations. Keep answers short. These are the coffees we sell:\n${coffeeList}`
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.trim() === "" || isLoading) return

        const userMessage = {
            role: "user",
            content: input
        }
        const updatedMessages = [...messages, userMessage]

        setMessages(updatedMessages)
        setInput("")
        setIsLoading(true)
        setError(null)

        ollama.chat({
            model: "llama3.2",
            messages: [systemMessage, ...updatedMessages]
        })
        .then((response) => {
            setMessages([...updatedMessages, response.message])
        })
        .catch(() => {
            setError("Could not reach the assistant. Make sure Ollama is running.")
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <div className="assistant">
            <h1>Coffee Assistant</h1>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.role}`}>
                        <strong>{message.role === "user" ? "You" : "Assistant"}</strong>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {message.content}
                        </ReactMarkdown>
                    </div>
                ))}
                {isLoading && <p className="chat-loading">Assistant is typing...</p>}
                {error && <p className="chat-error">{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="chat-input">Ask a question</label>
                <textarea
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our coffees..."
                />
                <button disabled={isLoading}>Send</button>
            </form>
        </div>
    )
}

export default Assistant
