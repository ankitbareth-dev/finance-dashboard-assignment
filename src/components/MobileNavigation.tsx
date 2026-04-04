import { NavLink } from "react-router-dom";
import { LayoutDashboard, CreditCard, PieChart, Wallet } from "lucide-react";

function MobileNavigation() {
  const menuItems = [
    { id: "dashboard", label: "Home", icon: LayoutDashboard, to: "/" },
    {
      id: "transactions",
      label: "Activity",
      icon: CreditCard,
      to: "/transactions",
    },
    { id: "insights", label: "Insights", icon: PieChart, to: "/insights" },
    { id: "budgets", label: "Budget", icon: Wallet, to: "/budgets" },
  ];

  return (
    <nav className="h-16 bg-panel border-t border-ghost-border flex justify-around items-center px-2 shrink-0 z-50">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink key={item.id} to={item.to}>
            {({ isActive }) => (
              <div className="flex flex-col items-center justify-center w-full h-full gap-1 group">
                <div className="p-1.5 rounded-lg transition-colors">
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={
                      isActive ? "text-primary" : "text-on-surface-variant"
                    }
                  />
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default MobileNavigation;
