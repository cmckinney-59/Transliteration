import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordReviewDialogComponent } from './word-review-dialog.component';

describe('WordReviewDialogComponent', () => {
  let component: WordReviewDialogComponent;
  let fixture: ComponentFixture<WordReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordReviewDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
