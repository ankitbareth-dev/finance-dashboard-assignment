import {
  LayoutDashboard,
  Wallet,
  PieChart,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const activeItem = "dashboard";

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "insights", label: "Insights", icon: PieChart },
    { id: "budgets", label: "Budgets", icon: Wallet },
  ];

  return (
    <aside className="flex flex-col h-full w-full bg-panel border-r border-ghost-border">
      <div className="h-16 flex items-center px-6 border-b border-ghost-border">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <div className="bg-primary text-white p-1 rounded-md">
            <LayoutDashboard size={20} />
          </div>
          <span className="text-on-surface">FinDash</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href="#"
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-primary-soft text-primary"
                    : "text-on-surface-variant hover:bg-panel-muted hover:text-on-surface"
                }
              `}
            >
              <Icon size={20} className={isActive ? "text-primary" : ""} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-ghost-border/50 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-panel-muted hover:text-on-surface transition-colors"
        >
          <Settings size={20} />
          Settings
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-expense hover:bg-expense-soft transition-colors"
        >
          <LogOut size={20} />
          Log out
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
