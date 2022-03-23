import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnvComponent } from './rightnv.component';

describe('RightnvComponent', () => {
  let component: RightnvComponent;
  let fixture: ComponentFixture<RightnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
