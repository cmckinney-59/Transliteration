import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToReadComponent } from './how-to-read.component';

describe('HowToReadComponent', () => {
  let component: HowToReadComponent;
  let fixture: ComponentFixture<HowToReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
