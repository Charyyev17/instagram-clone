import Icon from "../../../../components/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Reply ({ setMessages }) {

    const [message, setMessage] = useState('')
	const { user } = useSelector(state => state.auth)
	const { chatUser } = useSelector(state => state.chat)

	const sendMessage = e => {
		e.preventDefault()
		setMessages(messages => [
			...messages,
			{
				from: {
					id: user.uid,
					name: chatUser.name,
					username: user.username,
					avatar: chatUser.avatar
				},
				message
			},
		])
		setMessage('')
	}

    return (
        <div className="flex items-center justify-center px-6 h-[84px]">
            <form onSubmit={sendMessage} className="flex items-center w-full h-[44px] border rounded-3xl pl-[11px] pr-[8px]">
                <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
                    <Icon name="emoji" size={24}/>
                </button>
				<input value={message} onChange={e => setMessage(e.target.value)} className="flex-1 outline-none h-[40px] bg-none placeholder:text-gray-500 focus:placeholder:text-gray-300 text-sm px-[9px]" placeholder="Message.." />                
                {!message && (
					<>
						<button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
							<Icon name="chat-add-photo" size={24} />
						</button>
						<button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
							<Icon name="heart" size={24} />
						</button>
					</>
				)}
				{message && <button type="submit" className="text-brand font-semibold text-sm px-3">Send</button>} 
            </form>
        </div>
    )
}