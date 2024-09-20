import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AurebeshDescriptionComponent } from './aurebesh-description.component';

describe('AurebeshDescriptionComponent', () => {
  let component: AurebeshDescriptionComponent;
  let fixture: ComponentFixture<AurebeshDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AurebeshDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AurebeshDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
