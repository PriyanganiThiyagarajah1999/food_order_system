import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoCartPageComponent } from './addto-cart-page.component';

describe('AddtoCartPageComponent', () => {
  let component: AddtoCartPageComponent;
  let fixture: ComponentFixture<AddtoCartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtoCartPageComponent]
    });
    fixture = TestBed.createComponent(AddtoCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
