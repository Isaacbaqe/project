import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferanceBindingComponent } from './template-referance-binding.component';

describe('TemplateReferanceBindingComponent', () => {
  let component: TemplateReferanceBindingComponent;
  let fixture: ComponentFixture<TemplateReferanceBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferanceBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferanceBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
