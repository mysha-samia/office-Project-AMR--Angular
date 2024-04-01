import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCountbarComponent } from './top-countbar.component';

describe('TopCountbarComponent', () => {
  let component: TopCountbarComponent;
  let fixture: ComponentFixture<TopCountbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopCountbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopCountbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
