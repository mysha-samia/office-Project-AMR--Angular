import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTakenTelemedicineServiceComponent } from './user-taken-telemedicine-service.component';

describe('UserTakenTelemedicineServiceComponent', () => {
  let component: UserTakenTelemedicineServiceComponent;
  let fixture: ComponentFixture<UserTakenTelemedicineServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTakenTelemedicineServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTakenTelemedicineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
