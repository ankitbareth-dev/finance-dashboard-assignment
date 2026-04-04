import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileNavigation from "./components/MobileNavigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface text-on-surface font-sans h-screen w-screen overflow-hidden">
        <div className="md:hidden h-full flex flex-col">
          <div className="h-16 shrink-0">
            <Header />
          </div>

          <main className="flex-1 overflow-y-auto p-4 pb-4">
            <AppRoutes />
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
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
