import { LayoutDashboard, CreditCard, PieChart, Wallet } from "lucide-react";

function MobileNavigation() {
  const activeItem = "dashboard";

  const menuItems = [
    { id: "dashboard", label: "Home", icon: LayoutDashboard },
    { id: "transactions", label: "Activity", icon: CreditCard },
    { id: "insights", label: "Insights", icon: PieChart },
    { id: "budgets", label: "Budget", icon: Wallet },
  ];

  return (
    <nav className="h-16 bg-panel border-t border-ghost-border flex justify-around items-center px-2 shrink-0 z-50">
      {menuItems.map((item) => {
        const isActive = activeItem === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className="flex flex-col items-center justify-center w-full h-full gap-1 group"
          >
            <div
              className={`p-1.5 rounded-lg transition-colors ${
                isActive ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span
              className={`text-[10px] font-medium transition-colors ${
                isActive ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default MobileNavigation;
