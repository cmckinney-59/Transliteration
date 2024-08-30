import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AurebeshPageComponent } from './aurebesh-page.component';

describe('AurebeshPageComponent', () => {
  let component: AurebeshPageComponent;
  let fixture: ComponentFixture<AurebeshPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AurebeshPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AurebeshPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
