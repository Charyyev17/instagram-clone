import Icon from "../../components/Icon";

export default function ProfileTagged () {
    return (
        <div className="flex flex-col items-center justify-center">
            <span className="border-black border-[3px] rounded-full p-3.5 mt-10 mb-6 items-center">
                <Icon name="tagged" size={28}/>
            </span>
            <h1 className="text-3xl font-bold">No Photos</h1>
        </div>
    )
}