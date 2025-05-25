import { Icon } from "@iconify/react";

function SimpleAppointmentCard({ title, time, icon, dr }) {
    return (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 w-full">
            <div className="flex items-center justify-between gap-3">
                <div className="gap-3">
                    <Icon icon={icon} className="text-blue-600 text-2xl" />
                    <div>
                        <div className="font-semibold text-blue-800">{title}</div>
                        <div className="text-sm text-blue-600">{time}</div>
                        {/* {dr && <div className="text-xs text-gray-500">{dr}</div>} */}
                    </div>
                </div>
                {/* Optional action (like reschedule) */}
                {/* <button className="text-sm text-blue-600 hover:underline">Details</button> */}
            </div>
        </div>
    );
}

export default SimpleAppointmentCard;
