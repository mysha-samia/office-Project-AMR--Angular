import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SskComponent } from './ssk.component';

describe('SskComponent', () => {
  let component: SskComponent;
  let fixture: ComponentFixture<SskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
