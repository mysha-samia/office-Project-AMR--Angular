import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServedGraphComponent } from './served-graph.component';

describe('ServedGraphComponent', () => {
  let component: ServedGraphComponent;
  let fixture: ComponentFixture<ServedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServedGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
