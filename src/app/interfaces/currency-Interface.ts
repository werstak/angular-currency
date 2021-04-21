export interface CurrencyInterface {
  amount: number;
  base: string;
  end_date: string;
  start_date: string;
  rates: { [key: string]: { [key: string]: number } };
}


