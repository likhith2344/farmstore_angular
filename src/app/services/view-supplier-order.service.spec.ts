import { TestBed } from '@angular/core/testing';

import { ViewSupplierOrderService } from './view-supplier-order.service';

describe('ViewSupplierOrderService', () => {
  let service: ViewSupplierOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSupplierOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
