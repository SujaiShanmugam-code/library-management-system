import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBorrowedComponent } from './update-borrowed.component';

describe('UpdateBorrowedComponent', () => {
  let component: UpdateBorrowedComponent;
  let fixture: ComponentFixture<UpdateBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBorrowedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
