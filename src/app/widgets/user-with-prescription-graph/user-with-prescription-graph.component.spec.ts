import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithPrescriptionGraphComponent } from './user-with-prescription-graph.component';

describe('UserWithPrescriptionGraphComponent', () => {
  let component: UserWithPrescriptionGraphComponent;
  let fixture: ComponentFixture<UserWithPrescriptionGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWithPrescriptionGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWithPrescriptionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
