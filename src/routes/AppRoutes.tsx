import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/budgets" element={<Budgets />} />
    </Routes>
  );
}

export default AppRoutes;

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-on-surface">Dashboard Overview</h2>
      <div className="h-64 bg-panel border border-ghost-border rounded-xl flex items-center justify-center text-on-surface-muted">
        Dashboard Content
      </div>
    </div>
  );
}

export function Transactions() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">Transactions</h2>
      <div className="h-64 bg-panel border border-ghost-border rounded-xl flex items-center justify-center text-on-surface-muted">
        Transactions List
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">Insights</h2>
      <div className="h-64 bg-panel border border-ghost-border rounded-xl flex items-center justify-center text-on-surface-muted">
        Analytics Charts
      </div>
    </div>
  );
}

export function Budgets() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-on-surface">Budgets</h2>
      <div className="h-64 bg-panel border border-ghost-border rounded-xl flex items-center justify-center text-on-surface-muted">
        Budget Planning
      </div>
    </div>
  );
}
