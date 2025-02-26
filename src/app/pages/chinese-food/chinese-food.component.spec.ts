import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseFoodComponent } from './chinese-food.component';

describe('ChineseFoodComponent', () => {
  let component: ChineseFoodComponent;
  let fixture: ComponentFixture<ChineseFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChineseFoodComponent]
    });
    fixture = TestBed.createComponent(ChineseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
