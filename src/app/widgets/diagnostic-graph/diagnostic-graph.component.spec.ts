import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticGraphComponent } from './diagnostic-graph.component';

describe('DiagnosticGraphComponent', () => {
  let component: DiagnosticGraphComponent;
  let fixture: ComponentFixture<DiagnosticGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosticGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosticGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
