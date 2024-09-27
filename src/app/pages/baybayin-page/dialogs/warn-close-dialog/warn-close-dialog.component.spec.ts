import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnCloseDialogComponent } from './warn-close-dialog.component';

describe('WarnCloseDialogComponent', () => {
  let component: WarnCloseDialogComponent;
  let fixture: ComponentFixture<WarnCloseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarnCloseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarnCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
