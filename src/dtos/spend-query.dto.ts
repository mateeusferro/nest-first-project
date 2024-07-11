export class SpendQuery {
  category: string;
  total: number;

  constructor(category: string, total: number) {
    this.category = category;
    this.total = total;
  }
}
