import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaybayinDescriptionComponent } from './baybayin-description.component';

describe('BaybayinDescriptionComponent', () => {
  let component: BaybayinDescriptionComponent;
  let fixture: ComponentFixture<BaybayinDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaybayinDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaybayinDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
