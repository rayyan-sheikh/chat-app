import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div style={{ position: "relative" }}>
				<input
					type="text"
					placeholder="Send a message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "8px",
						border: "1px solid gray",
						backgroundColor: "#4A5568",
						color: "white",
					}}
				/>
				<button type="submit" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>
					{loading ? <div>Loading...</div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
