import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";

export default function Chat () {

    const { user } = useSelector(state => state.auth)
    const { chatUser } = useSelector(state => state.chat)

    const [messages, setMessages] = useState([
		{
			from: {
				id: user.uid,
				name: user.fullName,
				username: user.username,
				avatar: user.avatar
			},
			message: 'how u doin'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: chatUser.name,
				username: chatUser.name,
				avatar: chatUser.avatar
			},
			message: 'good u?'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: chatUser.name,
				username: chatUser.name,
				avatar: chatUser.avatar
			},
			message: 'did u see new avatar film?'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: chatUser.name,
				username: chatUser.name,
				avatar: chatUser.avatar
			},
			message: 'if u didnt, watch it immediately'
		},
		{
			from: {
				id: user.uid,
				name: user.fullName,
				username: user.username,
				avatar: user.avatar
			},
			message: 'for sure'
		}
	])

    
    return (
        <div className="flex-1">
            <Header/>
            <Messages messages={messages}/>
            <Reply setMessages={setMessages}/>
        </div>
    )
}