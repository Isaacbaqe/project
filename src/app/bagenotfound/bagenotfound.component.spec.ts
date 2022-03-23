import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagenotfoundComponent } from './bagenotfound.component';

describe('BagenotfoundComponent', () => {
  let component: BagenotfoundComponent;
  let fixture: ComponentFixture<BagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
