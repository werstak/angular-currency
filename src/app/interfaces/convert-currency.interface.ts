export interface ConvertCurrencyInterface {
  amount: number;
  base: string;
  date: Date;
  rates?: { [key: string]: number };
}
