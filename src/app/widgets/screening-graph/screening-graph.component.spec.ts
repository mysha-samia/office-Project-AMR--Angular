import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningGraphComponent } from './screening-graph.component';

describe('ScreeningGraphComponent', () => {
  let component: ScreeningGraphComponent;
  let fixture: ComponentFixture<ScreeningGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreeningGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreeningGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
