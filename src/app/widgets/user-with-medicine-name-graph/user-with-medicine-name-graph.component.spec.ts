import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithMedicineNameGraphComponent } from './user-with-medicine-name-graph.component';

describe('UserWithMedicineNameGraphComponent', () => {
  let component: UserWithMedicineNameGraphComponent;
  let fixture: ComponentFixture<UserWithMedicineNameGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWithMedicineNameGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWithMedicineNameGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
