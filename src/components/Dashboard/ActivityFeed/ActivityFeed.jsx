function ActivityFeed() {
    const activityData = [
        { label: "Mon", value: 2 },
        { label: "Tue", value: 4 },
        { label: "Wed", value: 1 },
        { label: "Thu", value: 3 },
        { label: "Fri", value: 0 },
        { label: "Sat", value: 5 },
        { label: "Sun", value: 2 },
    ];

    const max = Math.max(...activityData.map(d => d.value));

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold mb-2">Weekly Activity</h2>
                {/* Summary */}
                <div className="mt-4 text-sm text-gray-500 text-center">
                    Total appointments:{" "}
                    <span className="font-semibold text-gray-800">
                        {activityData.reduce((sum, d) => sum + d.value, 0)}
                    </span>
                </div>
            </div>

            <div className="relative h-40 border-l border-b border-gray-300 pl-4 pb-6">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="border-t border-dashed border-gray-200"
                        ></div>
                    ))}
                </div>

                {/* Line segments */}
                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    {activityData.map((point, idx) => {
                        if (idx === activityData.length - 1) return null;
                        const currVal = activityData[idx].value;
                        const nextVal = activityData[idx + 1].value;

                        const x1 = (idx / (activityData.length - 1)) * 100;
                        const x2 = ((idx + 1) / (activityData.length - 1)) * 100;

                        const y1 = 100 - (currVal / max) * 100;
                        const y2 = 100 - (nextVal / max) * 100;

                        return (
                            <line
                                key={idx}
                                x1={`${x1}%`}
                                y1={`${y1}%`}
                                x2={`${x2}%`}
                                y2={`${y2}%`}
                                stroke="#3B82F6"
                                strokeWidth="2"
                            />
                        );
                    })}
                </svg>

                {/* Points (dots) */}
                <div className="flex justify-between items-end h-full relative z-10">
                    {activityData.map((point, idx) => {
                        const heightPercent = (point.value / max) * 100;
                        return (
                            <div key={idx} className="relative w-full flex justify-center">
                                <div
                                    className="w-3 h-3 bg-blue-600 rounded-full absolute bottom-0"
                                    style={{ bottom: `${heightPercent}%` }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Labels under chart */}
            <div className="flex justify-between mt-2 text-sm text-gray-600 px-2">
                {activityData.map((point, idx) => (
                    <div key={idx} className="w-full text-center">{point.label}</div>
                ))}
            </div>


        </div>
    );
}

export default ActivityFeed;
