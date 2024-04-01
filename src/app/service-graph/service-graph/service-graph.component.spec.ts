import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGraphComponent } from './service-graph.component';

describe('ServiceGraphComponent', () => {
  let component: ServiceGraphComponent;
  let fixture: ComponentFixture<ServiceGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
