import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemedicineGraphComponent } from './telemedicine-graph.component';

describe('TelemedicineGraphComponent', () => {
  let component: TelemedicineGraphComponent;
  let fixture: ComponentFixture<TelemedicineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelemedicineGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelemedicineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
