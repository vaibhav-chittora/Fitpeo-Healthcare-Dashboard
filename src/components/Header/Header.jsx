import { Icon } from "@iconify/react"

function Header() {
    return (
        <header className="flex items-center justify-between p-2 md:px-8 bg-white  ">
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-full max-w-md">
                <Icon icon="mdi:magnify" className="text-gray-500 text-xl" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm w-full"
                />
                <button className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <Icon icon="mdi:bell-outline" className="text-xl text-gray-600" />
                </button>
            </div>
            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                    />
                    <button className="p-2 bg-blue-800 text-white rounded-lg cursor-pointer hover:bg-blue-700">
                        <Icon icon="mdi:plus" className="text-lg" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
