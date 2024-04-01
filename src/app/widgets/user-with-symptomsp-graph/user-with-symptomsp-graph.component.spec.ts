import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithSymptomspGraphComponent } from './user-with-symptomsp-graph.component';

describe('UserWithSymptomspGraphComponent', () => {
  let component: UserWithSymptomspGraphComponent;
  let fixture: ComponentFixture<UserWithSymptomspGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWithSymptomspGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWithSymptomspGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
