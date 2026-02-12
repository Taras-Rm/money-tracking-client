import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Transaction {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface TransactionsTableProps {
  transactions: Transaction[];
  onViewAll?: () => void;
}

const TransactionsTable = ({
  transactions,
  onViewAll,
}: TransactionsTableProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatAmount = (amount: number, type: 'income' | 'expense') => {
    const sign = type === 'income' ? '+' : '-';
    return `${sign}$${Math.abs(amount).toFixed(2)}`;
  };

  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Transactions</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing records for October 2023
            </p>
          </div>
          {onViewAll && (
            <Button variant="link" onClick={onViewAll} className="text-primary">
              View All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4">Date</TableHead>
                <TableHead className="px-6 py-4">Category</TableHead>
                <TableHead className="px-6 py-4">Description</TableHead>
                <TableHead className="px-6 py-4 text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="px-6 py-4 text-sm text-slate-500">
                    {formatDate(transaction.date)}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant={
                        transaction.type === 'income' ? 'default' : 'outline'
                      }
                      className={
                        transaction.type === 'income'
                          ? 'bg-primary/15 text-primary'
                          : 'bg-slate-100 text-slate-600'
                      }
                    >
                      {transaction.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell
                    className={`px-6 py-4 text-right font-bold ${
                      transaction.type === 'income'
                        ? 'text-primary'
                        : 'text-slate-900'
                    }`}
                  >
                    {formatAmount(transaction.amount, transaction.type)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
