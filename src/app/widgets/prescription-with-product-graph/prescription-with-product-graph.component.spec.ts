import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionWithProductGraphComponent } from './prescription-with-product-graph.component';

describe('PrescriptionWithProductGraphComponent', () => {
  let component: PrescriptionWithProductGraphComponent;
  let fixture: ComponentFixture<PrescriptionWithProductGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescriptionWithProductGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescriptionWithProductGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
