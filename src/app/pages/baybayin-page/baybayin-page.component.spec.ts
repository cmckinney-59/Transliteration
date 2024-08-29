import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaybayinPageComponent } from './baybayin-page.component';

describe('BaybayinPageComponent', () => {
  let component: BaybayinPageComponent;
  let fixture: ComponentFixture<BaybayinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaybayinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaybayinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
