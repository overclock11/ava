interface Iterm {
  count: number;
  units: string;
}
interface IProduct{
  id: string;
  type: string;
  issuer: string;
}
interface ISummary{
  total_due?: number;
  min_payment?: number;
  term?: Iterm;
  nominal_rate?: number;
  amount?: number;
  profits?: number;
  effective_monthly_rate?: number;
  balance?: number;
  paid_installments?: number;
  total_installments?: number;
  next_payment_amount?: number;
  next_payment?: string;
  franchise?: string;
  category?: string;
  credit_line?: number;
  advance_credit_line?: number;
}
export interface IFinancialProduct {
  product: IProduct;
  status?: string;
  issue_date: string;
  due_date?: string;
  summary: ISummary;
}


