import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAvatarComponent } from './upload-avatar.component';

describe('UploadAvatarComponent', () => {
  let component: UploadAvatarComponent;
  let fixture: ComponentFixture<UploadAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createProduct', () => {
    expect(component).toBeTruthy();
  });
});
