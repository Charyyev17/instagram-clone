import Icon from "../../components/Icon"

export default function Inbox () {

    return (

        <div className="flex flex-col items-center justify-center w-8/12 gap-y-2">

            <Icon name="your-messages" size={100}/>
            <span className="text-[20px] text-center">Your Messages</span>
            <span className="text-sm text-gray-400 text-center">Sent private photos and messages to a friend or group</span>
            <div className="mt-4">
                <button className="bg-signup text-white text-sm font-medium rounded-md py-1.5 px-3">
                    Send Message
                </button>
            </div>

        </div>
    )
}