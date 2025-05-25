import { navLinks } from "../../data/navLinks"
import { Icon } from "@iconify/react"

function Sidebar() {
    return (
        <aside className="w-64 shadow-md hidden md:flex flex-col p-6 bg-blue-50">
            <div className="text-2xl font-bold text-sky-500 mb-10">Health<span className="text-blue-800">care.</span></div>
            <div className="flex flex-col gap-6">
                {navLinks.map((section, index) => (
                    <div key={index}>
                        <div className="text-xs uppercase text-gray-400 mb-2">{section.title}</div>
                        <div className="flex flex-col gap-4">
                            {section.links.map((link) => (
                                <div key={link.label} className="flex items-center gap-3 text-sm text-gray-700 font-bold hover:text-blue-600 cursor-pointer">
                                    <Icon icon={link.icon} className="text-lg" />
                                    {link.label}

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar
