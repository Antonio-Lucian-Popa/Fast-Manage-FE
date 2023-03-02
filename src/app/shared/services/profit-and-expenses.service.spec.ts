import { TestBed } from '@angular/core/testing';

import { ProfitAndExpensesService } from './profit-and-expenses.service';

describe('ProfitAndExpensesService', () => {
  let service: ProfitAndExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitAndExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
