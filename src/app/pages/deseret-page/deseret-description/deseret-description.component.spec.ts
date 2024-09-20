import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseretDescriptionComponent } from './deseret-description.component';

describe('DeseretDescriptionComponent', () => {
  let component: DeseretDescriptionComponent;
  let fixture: ComponentFixture<DeseretDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeseretDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeseretDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
