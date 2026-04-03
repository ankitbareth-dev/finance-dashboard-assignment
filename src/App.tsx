import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[64px_1fr] bg-surface text-on-surface font-sans">
      <div className="row-span-2">
        <Sidebar />
      </div>

      <div className="col-start-2 row-start-1">
        <Header />
      </div>

      <main className="col-start-2 row-start-2 overflow-y-auto p-8">
        <div className="text-on-surface-muted">Main Content</div>
      </main>
    </div>
  );
}

export default App;
