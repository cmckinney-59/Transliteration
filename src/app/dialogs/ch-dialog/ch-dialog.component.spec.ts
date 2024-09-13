import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChDialogComponent } from './ch-dialog.component';

describe('ChDialogComponent', () => {
  let component: ChDialogComponent;
  let fixture: ComponentFixture<ChDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
