export class Paging {
  perPage: number;
  totalItems: number;
  totalPages: number;

  constructor(perPage: number, totalItems: number, totalPages: number) {
    this.perPage = perPage;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }
}

export class Pagination<T> {
  data: T;
  paging: Paging;

  constructor(paging: Paging, data: T) {
    this.data = data;
    this.paging = paging;
  }
}
