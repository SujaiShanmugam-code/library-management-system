import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBorrowedComponent } from './create-borrowed.component';

describe('CreateBorrowedComponent', () => {
  let component: CreateBorrowedComponent;
  let fixture: ComponentFixture<CreateBorrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBorrowedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
