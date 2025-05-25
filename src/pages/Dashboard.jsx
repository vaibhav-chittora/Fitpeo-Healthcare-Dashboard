// src/pages/Dashboard.jsx

import AnatomySection from "../components/Dashboard/AnatomySection/AnatomySection";
import HealthStatusCards from "../components/Dashboard/HealthStatusCards/HealthStatusCards";
import CalendarView from "../components/Dashboard/CalendarView/CalendarView";
import UpcomingSchedule from "../components/Dashboard/UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../components/Dashboard/ActivityFeed/ActivityFeed";

function Dashboard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Anatomy, Health Cards, Activity */}
            <div className="lg:col-span-2 gap-6 bg-white rounded-2xl p-2">
                <h1 className="text-2xl font-bold text-blue-800 mb-4">
                    Dashboard</h1>
                <div className=" flex gap-6 my-2 flex-col lg:flex-row">
                    <AnatomySection />
                    <HealthStatusCards />
                </div>
                <ActivityFeed />
            </div>

            {/* Right Column: Calendar + Upcoming Schedule */}
            <div className="flex flex-col gap-6">
                <CalendarView />
                <UpcomingSchedule />
            </div>
        </div>
    );
}

export default Dashboard;
