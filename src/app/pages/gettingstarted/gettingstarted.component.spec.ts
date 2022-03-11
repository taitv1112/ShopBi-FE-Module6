import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GettingStartedComponent } from './gettingstarted.component';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GettingStartedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createProduct', () => {
    expect(component).toBeTruthy();
  });
});
