import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMedicineNameAndSymptomsComponent } from './list-of-medicine-name-and-symptoms.component';

describe('ListOfMedicineNameAndSymptomsComponent', () => {
  let component: ListOfMedicineNameAndSymptomsComponent;
  let fixture: ComponentFixture<ListOfMedicineNameAndSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfMedicineNameAndSymptomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfMedicineNameAndSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
