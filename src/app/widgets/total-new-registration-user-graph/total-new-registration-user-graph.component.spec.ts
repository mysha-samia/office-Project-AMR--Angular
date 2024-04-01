import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNewRegistrationUserGraphComponent } from './total-new-registration-user-graph.component';

describe('TotalNewRegistrationUserGraphComponent', () => {
  let component: TotalNewRegistrationUserGraphComponent;
  let fixture: ComponentFixture<TotalNewRegistrationUserGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalNewRegistrationUserGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalNewRegistrationUserGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
