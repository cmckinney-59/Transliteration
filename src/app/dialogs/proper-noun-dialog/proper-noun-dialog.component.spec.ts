import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperNounDialogComponent } from './proper-noun-dialog.component';

describe('ProperNounDialogComponent', () => {
  let component: ProperNounDialogComponent;
  let fixture: ComponentFixture<ProperNounDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperNounDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProperNounDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
