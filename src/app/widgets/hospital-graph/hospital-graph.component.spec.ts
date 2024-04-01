import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalGraphComponent } from './hospital-graph.component';

describe('HospitalGraphComponent', () => {
  let component: HospitalGraphComponent;
  let fixture: ComponentFixture<HospitalGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
