import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvervirewComponent } from './overvirew.component';

describe('OvervirewComponent', () => {
  let component: OvervirewComponent;
  let fixture: ComponentFixture<OvervirewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvervirewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvervirewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
