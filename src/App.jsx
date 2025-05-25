import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="min-h-screen flex bg-blue-100 text-[#1f2d3d] ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-2 flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
