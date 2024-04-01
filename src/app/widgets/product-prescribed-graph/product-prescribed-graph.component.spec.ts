import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPrescribedGraphComponent } from './product-prescribed-graph.component';

describe('ProductPrescribedGraphComponent', () => {
  let component: ProductPrescribedGraphComponent;
  let fixture: ComponentFixture<ProductPrescribedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPrescribedGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPrescribedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
