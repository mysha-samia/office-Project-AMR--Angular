import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserGraphComponent } from './new-user-graph.component';

describe('NewUserGraphComponent', () => {
  let component: NewUserGraphComponent;
  let fixture: ComponentFixture<NewUserGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewUserGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUserGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
