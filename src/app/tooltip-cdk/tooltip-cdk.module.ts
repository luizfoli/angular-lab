import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { TooltipCdkComponent } from './tooltip-cdk.component';
import { TooltipCdkRoutingModule } from './tooltip-cdk-routing.module';
import { TooltipDirective } from './tooltip.directive';
import { TooltipDataComponent } from './tooltip-data/tooltip-data.component';

@NgModule({
  declarations: [
    TooltipCdkComponent,
    TooltipDirective,
    TooltipDataComponent
  ],
  imports: [
    CommonModule,
    TooltipCdkRoutingModule,
    OverlayModule
  ],
  entryComponents: [TooltipDataComponent]
})
export class TooltipCdkModule { }
