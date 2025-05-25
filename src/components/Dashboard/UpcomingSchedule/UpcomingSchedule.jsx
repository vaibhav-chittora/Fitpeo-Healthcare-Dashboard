import SimpleAppointmentCard from "../../SimpleAppointmentCard/SimpleAppointmentCard";
import { weeklyAppointments } from "../../../data/appointments"; // Using updated structure

function UpcomingSchedule() {
    return (
        <div className="bg-white rounded-xl shadow p-6 ">
            <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
            <div className="space-y-6 ">
                {weeklyAppointments.map((dayBlock, idx) => (
                    <div key={idx} className="" >
                        <h3 className="text-sm font-semibold text-gray-600 mb-2 ">
                            {dayBlock.day}, {dayBlock.date}
                        </h3>
                        <div className="flex gap-3">
                            {dayBlock.appointments.map((app, i) => (
                                <SimpleAppointmentCard key={i} {...app} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingSchedule;
