import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderDetailInBuyerComponent } from './list-order-detail-in-buyer.component';

describe('ListOrderDetailInBuyerComponent', () => {
  let component: ListOrderDetailInBuyerComponent;
  let fixture: ComponentFixture<ListOrderDetailInBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderDetailInBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderDetailInBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
