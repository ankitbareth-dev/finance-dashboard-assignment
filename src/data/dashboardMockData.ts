import { type DashboardData } from "../types/dashboard";

export const dashboardMockData: DashboardData = {
  summary: {
    totalBalance: {
      id: "1",
      title: "Total Balance",
      amount: 185400,
      currency: "₹",
      trend: {
        value: 12.5,
        isPositive: true,
        label: "vs last month",
      },
    },
    totalIncome: {
      id: "2",
      title: "Income",
      amount: 85000,
      currency: "₹",
      trend: {
        value: 8.2,
        isPositive: true,
        label: "vs last month",
      },
    },
    totalExpenses: {
      id: "3",
      title: "Expenses",
      amount: 42300,
      currency: "₹",
      trend: {
        value: 2.4,
        isPositive: false,
        label: "vs last month",
      },
    },
  },
  balanceTrend: [
    { month: "Jan", balance: 120000, income: 80000, expense: 45000 },
    { month: "Feb", balance: 135000, income: 82000, expense: 52000 },
    { month: "Mar", balance: 125000, income: 75000, expense: 60000 },
    { month: "Apr", balance: 150000, income: 90000, expense: 55000 },
    { month: "May", balance: 170000, income: 85000, expense: 48000 },
    { month: "Jun", balance: 185400, income: 85000, expense: 42300 },
  ],
  spendingBreakdown: [
    {
      id: "cat-1",
      category: "Housing",
      amount: 15000,
      percentage: 35.5,
      color: "#3f7ae0",
    },
    {
      id: "cat-2",
      category: "Food & Dining",
      amount: 8500,
      percentage: 20.1,
      color: "#d21f1f",
    },
    {
      id: "cat-3",
      category: "Transportation",
      amount: 6200,
      percentage: 14.7,
      color: "#c79c1b",
    },
    {
      id: "cat-4",
      category: "Shopping",
      amount: 5100,
      percentage: 12.1,
      color: "#7b61ff",
    },
    {
      id: "cat-5",
      category: "Entertainment",
      amount: 3500,
      percentage: 8.3,
      color: "#d84a77",
    },
    {
      id: "cat-6",
      category: "Others",
      amount: 4000,
      percentage: 9.3,
      color: "#95a0ae",
    },
  ],
};
