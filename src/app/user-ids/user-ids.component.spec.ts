import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdsComponent } from './user-ids.component';

describe('UserIdsComponent', () => {
  let component: UserIdsComponent;
  let fixture: ComponentFixture<UserIdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIdsComponent]
    });
    fixture = TestBed.createComponent(UserIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
