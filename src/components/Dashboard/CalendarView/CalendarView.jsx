import { Icon } from "@iconify/react";
import { weeklyAppointments } from "../../../data/calendar";

function CalendarView() {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-6">This Week's Schedule</h2>

            <div className="space-y-6">
                {weeklyAppointments.map((dayBlock, index) => (
                    <div key={index}>
                        {/* Day Header */}
                        <div className="text-sm font-semibold text-gray-600 mb-2">
                            {dayBlock.day}, {dayBlock.date}
                        </div>

                        {/* Appointments for that day */}
                        <div className="flex  gap-3">
                            {dayBlock.appointments.map((app, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-50 border border-blue-200 rounded-xl p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="">
                                            <div className="text-blue-800 font-medium">{app.title}</div>
                                            <div className="text-sm text-blue-600">{app.time}</div>
                                            <div className="text-xs text-gray-500">{app.dr}</div>
                                        </div>
                                        <Icon icon={app.icon} className="text-2xl text-blue-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalendarView;
