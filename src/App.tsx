import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileNavigation from "./components/MobileNavigation";

function App() {
  return (
    <div className="bg-surface text-on-surface font-sans h-screen w-screen overflow-hidden">
      <div className="md:hidden h-full flex flex-col">
        <div className="h-16 shrink-0">
          <Header />
        </div>

        <main className="flex-1 overflow-y-auto p-4 pb-4">
          <div className="text-on-surface-muted">
            <h2 className="text-xl font-semibold mb-4">Welcome Back</h2>

            <div className="space-y-4">
              <div className="h-32 bg-panel rounded-xl border border-ghost-border"></div>
              <div className="h-32 bg-panel rounded-xl border border-ghost-border"></div>
              <div className="h-32 bg-panel rounded-xl border border-ghost-border"></div>
            </div>
          </div>
        </main>

        <div className="shrink-0">
          <MobileNavigation />
        </div>
      </div>

      <div className="hidden md:h-full md:grid md:grid-cols-[auto_1fr] md:grid-rows-[64px_1fr]">
        <div className="row-span-2">
          <Sidebar />
        </div>

        <div className="col-start-2 row-start-1">
          <Header />
        </div>

        <main className="col-start-2 row-start-2 overflow-y-auto p-8">
          <div className="text-on-surface-muted">
            <h2 className="text-xl font-semibold mb-4">Welcome Back</h2>
            <div className="h-64 bg-panel rounded-xl border border-ghost-border"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
