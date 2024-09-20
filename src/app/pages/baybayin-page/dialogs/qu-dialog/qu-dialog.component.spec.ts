import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuDialogComponent } from './qu-dialog.component';

describe('QuDialogComponent', () => {
  let component: QuDialogComponent;
  let fixture: ComponentFixture<QuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
