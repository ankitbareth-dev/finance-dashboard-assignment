import { useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activeItem = "dashboard";

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "insights", label: "Insights", icon: PieChart },
    { id: "budgets", label: "Budgets", icon: Wallet },
  ];

  return (
    <aside
      className={`
        relative flex flex-col h-full bg-panel border-r border-ghost-border 
        transition-all duration-300 ease-in-out overflow-hidden
        ${isCollapsed ? "w-20" : "w-70"}
      `}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-1/2 -translate-y-1/2 -right-3 bg-panel border border-ghost-border rounded-full p-1 text-on-surface-variant hover:text-primary hover:shadow-md transition-all z-50"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className="h-16 flex items-center px-6 border-b border-ghost-border/50 shrink-0">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <div className="bg-primary text-white p-1 rounded-md shrink-0">
            <LayoutDashboard size={20} />
          </div>

          {!isCollapsed && (
            <span className="text-on-surface whitespace-nowrap opacity-100 transition-opacity duration-200">
              FinDash
            </span>
          )}
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href="#"
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${isCollapsed ? "justify-center" : "justify-start"}
                ${
                  isActive
                    ? "bg-primary-soft text-primary"
                    : "text-on-surface-variant hover:bg-panel-muted hover:text-on-surface"
                }
              `}
              title={isCollapsed ? item.label : ""}
            >
              <Icon size={20} className={isActive ? "text-primary" : ""} />

              {!isCollapsed && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-ghost-border/50 space-y-1 shrink-0">
        <a
          href="#"
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-panel-muted hover:text-on-surface transition-colors
            ${isCollapsed ? "justify-center" : "justify-start"}
          `}
          title={isCollapsed ? "Settings" : ""}
        >
          <Settings size={20} />
          {!isCollapsed && <span className="whitespace-nowrap">Settings</span>}
        </a>
        <a
          href="#"
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-expense hover:bg-expense-soft transition-colors
            ${isCollapsed ? "justify-center" : "justify-start"}
          `}
          title={isCollapsed ? "Log out" : ""}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="whitespace-nowrap">Log out</span>}
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
