import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavBarComponent } from './my-nav-bar.component';

describe('MyNavBarComponent', () => {
  let component: MyNavBarComponent;
  let fixture: ComponentFixture<MyNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNavBarComponent]
    });
    fixture = TestBed.createComponent(MyNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
