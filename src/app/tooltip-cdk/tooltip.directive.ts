import { Directive, ElementRef, OnInit, HostListener, ComponentRef } from '@angular/core';
import { OverlayRef, OverlayPositionBuilder, Overlay } from '@angular/cdk/overlay';
import { TooltipDataComponent } from './tooltip-data/tooltip-data.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {

  private overlayRef: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay) { }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(TooltipDataComponent);
    const tooltipRef: ComponentRef<TooltipDataComponent> = this.overlayRef.attach(tooltipPortal);
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

}
