import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CategorySpending {
  category: string;
  amount: number;
  percentage: number;
}

interface SpendingByCategoryProps {
  data: CategorySpending[];
}

const SpendingByCategory = ({ data }: SpendingByCategoryProps) => {
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-lg">
              Spending by Category{' '}
              <span className="text-xs font-normal text-slate-400 block">
                October 2023
              </span>
            </h3>
          </div>
          <Button variant="ghost" size="icon">
            <span className="material-symbols-outlined text-slate-400">
              more_horiz
            </span>
          </Button>
        </div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.category} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{item.category}</span>
                <span className="font-semibold">
                  {formatCurrency(item.amount)} ({item.percentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    opacity: index === 0 ? 1 : index === 1 ? 0.6 : 0.3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingByCategory;
