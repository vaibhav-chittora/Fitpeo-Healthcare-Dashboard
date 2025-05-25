import { Icon } from "@iconify/react/dist/iconify.js"

const mockCards = [
    {
        title: "Lungs",
        status: "Attention",
        color: "bg-red-500",
        date: "23 May 2025",
        icon: "mdi:lungs",
    },
    {
        title: "Teeth",
        status: "Healthy",
        color: "bg-green-500",
        date: "21 May 2025",
        icon: "mdi:tooth",
    },
    {
        title: "Bone",
        status: "Checkup",
        color: "bg-yellow-400",
        date: "22 May 2025",
        icon: "mdi:bone",
    },
]

function HealthStatusCards() {
    return (
        <div className="flex flex-col gap-y-1 ">
            {mockCards.map((card) => (
                <div key={card.title} className="shadow-2xl rounded-xl p-4 w-50">

                    <Icon icon={card.icon} className="text-blue-600 text-2xl" />
                    <div className="text-xl font-semibold mb-2">{card.title}</div>
                    <div className="text-xs mb-1 text-muted-foreground">{card.date}</div>
                    <div className={`text-xs text-white px-3 py-1 rounded-full w-fit ${card.color}`}>{card.status}</div>
                </div>
            ))}
        </div>
    )
}

export default HealthStatusCards
