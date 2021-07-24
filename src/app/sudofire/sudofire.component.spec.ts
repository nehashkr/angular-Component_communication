import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudofireComponent } from './sudofire.component';

describe('SudofireComponent', () => {
  let component: SudofireComponent;
  let fixture: ComponentFixture<SudofireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudofireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudofireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
