import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentlistComponent } from './depatmentlist.component';

describe('DepatmentlistComponent', () => {
  let component: DepatmentlistComponent;
  let fixture: ComponentFixture<DepatmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
