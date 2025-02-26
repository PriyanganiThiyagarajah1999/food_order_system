import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianFoodComponent } from './indian-food.component';

describe('IndianFoodComponent', () => {
  let component: IndianFoodComponent;
  let fixture: ComponentFixture<IndianFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianFoodComponent]
    });
    fixture = TestBed.createComponent(IndianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
