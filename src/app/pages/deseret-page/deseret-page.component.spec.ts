import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseretPageComponent } from './deseret-page.component';

describe('DeseretPageComponent', () => {
  let component: DeseretPageComponent;
  let fixture: ComponentFixture<DeseretPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeseretPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeseretPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
