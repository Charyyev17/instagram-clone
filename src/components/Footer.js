export default function Footer () {

   // <div className="flex flex-col ml-[360px] mr-[150px] mt-8 pb-14 sticky top-[100vh]">
 
    return (
        <div className="block w-full justify-center items-center mt-8 pb-14 sticky top-[100vh]">
       
            <div className="flex gap-x-4 justify-center text-xs text-gray-500">
                <a href="#">Meta</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Jobs</a>
                <a href="#">Help</a>
                <a href="#">API</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Top Accounts</a>
                <a href="#">Locations</a>
                <a href="#">Instagram Lite</a>
                <a href="#">Contact Uploading & Non-Users</a>
                <a href="#">Meta Verified</a>
            </div>

            <div className="flex gap-x-4 justify-center items-center text-xs text-gray-500 mt-4">
                <select className="cursor-pointer bg-transparent">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="tr">Türkçe</option>
                </select>

                <p>© 2023 Instagram clone by <span className="font-semibold text-[10px]">SCH</span></p>

            </div>
        </div>
    )
}