export interface SummaryCard {
  id: string;
  title: string;
  amount: number;
  currency: string;
  trend: {
    value: number;
    isPositive: boolean;
    label: string;
  };
}

export interface TrendDataPoint {
  month: string;
  balance: number;
  income?: number;
  expense?: number;
}

export interface SpendingCategory {
  id: string;
  category: string;
  amount: number;
  percentage: number;
  color: string;
  icon?: string;
}

export interface DashboardData {
  summary: {
    totalBalance: SummaryCard;
    totalIncome: SummaryCard;
    totalExpenses: SummaryCard;
  };
  balanceTrend: TrendDataPoint[];
  spendingBreakdown: SpendingCategory[];
}
