import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithSymptomsGraphComponent } from './user-with-symptoms-graph.component';

describe('UserWithSymptomsGraphComponent', () => {
  let component: UserWithSymptomsGraphComponent;
  let fixture: ComponentFixture<UserWithSymptomsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserWithSymptomsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWithSymptomsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
