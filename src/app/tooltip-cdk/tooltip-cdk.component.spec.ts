import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCdkComponent } from './tooltip-cdk.component';

describe('TooltipCdkComponent', () => {
  let component: TooltipCdkComponent;
  let fixture: ComponentFixture<TooltipCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
