import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditebookComponent } from './editebook.component';

describe('EditebookComponent', () => {
  let component: EditebookComponent;
  let fixture: ComponentFixture<EditebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
