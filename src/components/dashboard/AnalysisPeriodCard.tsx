import { Card, CardContent } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface AnalysisPeriodCardProps {
  currentPeriod: string;
  onPeriodChange?: (period: string) => void;
}

const AnalysisPeriodCard = ({
  currentPeriod,
  onPeriodChange,
}: AnalysisPeriodCardProps) => {
  const periods = [
    { value: 'oct-2023', label: 'October 2023' },
    { value: 'sep-2023', label: 'September 2023' },
    { value: 'aug-2023', label: 'August 2023' },
    { value: 'jul-2023', label: 'July 2023' },
    { value: 'custom', label: 'Custom Range...' },
  ];

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">
                calendar_month
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Analysis Period
              </p>
              <h3 className="font-bold text-slate-900">{currentPeriod}</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label
              className="text-sm font-medium text-slate-600"
              htmlFor="period-select"
            >
              Period
            </label>
            <div className="relative">
              <Select
                id="period-select"
                value={currentPeriod}
                onChange={(e) => onPeriodChange?.(e.target.value)}
                className="appearance-none bg-slate-100 border-none rounded-lg py-2 pl-4 pr-10 text-sm font-semibold focus:ring-2 focus:ring-primary cursor-pointer"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </Select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-lg">
                expand_more
              </span>
            </div>
            <Button variant="outline" size="icon">
              <span className="material-symbols-outlined text-slate-500">
                filter_list
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisPeriodCard;
