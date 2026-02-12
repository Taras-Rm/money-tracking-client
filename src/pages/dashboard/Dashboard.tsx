import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryCard from '@/components/dashboard/SummaryCard';
import AnalysisPeriodCard from '@/components/dashboard/AnalysisPeriodCard';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import SpendingByCategory from '@/components/dashboard/SpendingByCategory';
import SavingsGoalCard from '@/components/dashboard/SavingsGoalCard';

interface Transaction {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPeriod, setCurrentPeriod] = useState('October 2023');

  // Mock data
  const mockTransactions: Transaction[] = [
    {
      id: '1',
      date: '2023-10-24',
      category: 'Income',
      description: 'Monthly Salary',
      amount: 4500,
      type: 'income',
    },
    {
      id: '2',
      date: '2023-10-23',
      category: 'Monthly Expense',
      description: 'Apartment Rent',
      amount: 1200,
      type: 'expense',
    },
    {
      id: '3',
      date: '2023-10-22',
      category: 'Other Expense',
      description: 'Grocery Store',
      amount: 150,
      type: 'expense',
    },
    {
      id: '4',
      date: '2023-10-21',
      category: 'Monthly Expense',
      description: 'Internet Subscription',
      amount: 60,
      type: 'expense',
    },
    {
      id: '5',
      date: '2023-10-20',
      category: 'Income',
      description: 'Freelance Project',
      amount: 750,
      type: 'income',
    },
    {
      id: '6',
      date: '2023-10-19',
      category: 'Other Expense',
      description: 'Starbucks Coffee',
      amount: 4.5,
      type: 'expense',
    },
  ];

  const categorySpending = [
    { category: 'Housing', amount: 1200, percentage: 57 },
    { category: 'Groceries', amount: 450, percentage: 21 },
    { category: 'Subscriptions', amount: 120, percentage: 6 },
  ];

  const handlePeriodChange = (period: string) => {
    const periodMap: Record<string, string> = {
      'oct-2023': 'October 2023',
      'sep-2023': 'September 2023',
      'aug-2023': 'August 2023',
      'jul-2023': 'July 2023',
      'custom': 'Custom Range...',
    };
    setCurrentPeriod(periodMap[period] || period);
  };

  const handleViewAllTransactions = () => {
    navigate('/transactions');
  };

  const handleCreateGoal = () => {
    console.log('Create goal clicked');
  };

  return (
    <>
      {/* Analysis Period Card */}
      <AnalysisPeriodCard
        currentPeriod={currentPeriod}
        onPeriodChange={handlePeriodChange}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Incomes"
          amount="$5,250.00"
          icon="trending_up"
          trend={{ value: '+12% from Sep 2023', isPositive: true }}
        />
        <SummaryCard
          title="Monthly Expenses"
          amount="$2,100.00"
          icon="trending_down"
          trend={{ value: '-5% from Sep 2023', isPositive: false }}
          iconBgColor="bg-red-100"
          iconTextColor="text-red-600"
        />
        <SummaryCard
          title="Remaining Balance"
          amount="$3,150.00"
          icon="account_balance_wallet"
          subtitle="Calculated for selected period"
          highlight
          iconBgColor="bg-slate-100"
          iconTextColor="text-slate-600"
        />
      </div>

      {/* Recent Transactions Table */}
      <TransactionsTable
        transactions={mockTransactions}
        onViewAll={handleViewAllTransactions}
      />

      {/* Secondary Grid Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingByCategory data={categorySpending} />
        <SavingsGoalCard
          savingsPercentage={60}
          onCreateGoal={handleCreateGoal}
        />
      </div>
    </>
  );
};

export default Dashboard;
