import { healthStatus } from "../../../data/healthStatus";

const statusColors = {
    healthy: "bg-purple-800",
    issue: "bg-red-500",
    checkup_due: "bg-sky-400",
};

function AnatomySection() {
    return (
        <div className="relative shadow-2xl rounded-xl  p-6 flex justify-center items-center w-[100%]">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYg_0F5eQyqpAKGQsI8Ja4zhO36tOeMrO6d4bMEsVo807bWdtOdaFLO6SUqR9j9KC3n_Y&usqp=CAUx"
                alt="Human Anatomy"

                className="w-48 h-auto object-contain"
            />
            {healthStatus.map(({ id, label, status, position }) => (
                <div
                    key={id}
                    className={`absolute text-white text-xs px-3 py-1 rounded-full ${statusColors[status]}`}
                    style={{ top: position.top, left: position.left }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

export default AnatomySection;
