import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDialogComponent } from './j-dialog.component';

describe('JDialogComponent', () => {
  let component: JDialogComponent;
  let fixture: ComponentFixture<JDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
