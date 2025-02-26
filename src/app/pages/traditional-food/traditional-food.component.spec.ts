import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalFoodComponent } from './traditional-food.component';

describe('TraditionalFoodComponent', () => {
  let component: TraditionalFoodComponent;
  let fixture: ComponentFixture<TraditionalFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraditionalFoodComponent]
    });
    fixture = TestBed.createComponent(TraditionalFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
