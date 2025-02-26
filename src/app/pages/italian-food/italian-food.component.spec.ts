import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianFoodComponent } from './italian-food.component';

describe('ItalianFoodComponent', () => {
  let component: ItalianFoodComponent;
  let fixture: ComponentFixture<ItalianFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalianFoodComponent]
    });
    fixture = TestBed.createComponent(ItalianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
