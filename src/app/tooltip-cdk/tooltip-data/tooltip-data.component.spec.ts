import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDataComponent } from './tooltip-data.component';

describe('TooltipDataComponent', () => {
  let component: TooltipDataComponent;
  let fixture: ComponentFixture<TooltipDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
