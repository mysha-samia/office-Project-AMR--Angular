import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefuseToTakeTelemedicineButBuyMedicineComponent } from './user-refuse-to-take-telemedicine-but-buy-medicine.component';

describe('UserRefuseToTakeTelemedicineButBuyMedicineComponent', () => {
  let component: UserRefuseToTakeTelemedicineButBuyMedicineComponent;
  let fixture: ComponentFixture<UserRefuseToTakeTelemedicineButBuyMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRefuseToTakeTelemedicineButBuyMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRefuseToTakeTelemedicineButBuyMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
