import { Card, CardContent } from '@/components/ui/card';

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  subtitle?: string;
  highlight?: boolean;
  iconBgColor?: string;
  iconTextColor?: string;
}

const SummaryCard = ({
  title,
  amount,
  icon,
  trend,
  subtitle,
  highlight = false,
  iconBgColor = 'bg-primary/20',
  iconTextColor = 'text-primary',
}: SummaryCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden group ${highlight ? 'border-l-4 border-l-primary' : ''
        }`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-medium">{title}</span>
          <div
            className={`size-10 ${iconBgColor} ${iconTextColor} flex items-center justify-center rounded-lg`}
          >
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold">{amount}</h3>
            {trend && (
              <p
                className={`text-xs font-semibold flex items-center gap-1 mt-1 ${trend.isPositive ? 'text-primary' : 'text-red-500'
                  }`}
              >
                <span className="material-symbols-outlined text-xs">
                  {trend.isPositive ? 'arrow_upward' : 'arrow_downward'}
                </span>
                {trend.value}
              </p>
            )}
            {subtitle && (
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
