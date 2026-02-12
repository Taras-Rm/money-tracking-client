import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SavingsGoalCardProps {
  savingsPercentage: number;
  onCreateGoal?: () => void;
}

const SavingsGoalCard = ({
  savingsPercentage,
  onCreateGoal,
}: SavingsGoalCardProps) => {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <div className="bg-background-light p-4 rounded-full mb-4">
          <span className="material-symbols-outlined text-4xl text-primary">
            savings
          </span>
        </div>
        <h4 className="font-bold text-lg mb-2">Set a Savings Goal</h4>
        <p className="text-slate-500 text-sm max-w-[280px] mb-6">
          You're currently saving {savingsPercentage}% of your income. Start a
          goal to track your progress towards a new car or house!
        </p>
        <Button
          onClick={onCreateGoal}
          className="px-6 py-2 bg-slate-900 text-white font-bold hover:opacity-90"
        >
          Create Goal
        </Button>
      </CardContent>
    </Card>
  );
};

export default SavingsGoalCard;
