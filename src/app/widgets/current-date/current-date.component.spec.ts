import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateComponent } from './current-date.component';

describe('CurrentDateComponent', () => {
  let component: CurrentDateComponent;
  let fixture: ComponentFixture<CurrentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
