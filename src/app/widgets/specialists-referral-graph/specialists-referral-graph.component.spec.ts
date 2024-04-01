import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsReferralGraphComponent } from './specialists-referral-graph.component';

describe('SpecialistsReferralGraphComponent', () => {
  let component: SpecialistsReferralGraphComponent;
  let fixture: ComponentFixture<SpecialistsReferralGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistsReferralGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialistsReferralGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
