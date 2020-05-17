import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipCdkComponent } from './tooltip-cdk.component';
import { TooltipCdkRoutingModule } from './tooltip-cdk-routing.module';
import { TooltipDirective } from './tooltip.directive';
import { TooltipDataComponent } from './tooltip-data/tooltip-data.component';

@NgModule({
  declarations: [
    TooltipCdkComponent,
    TooltipDirectiveDirective,
    TooltipDataComponent
  ],
  imports: [
    CommonModule,
    TooltipCdkRoutingModule
  ]
})
export class TooltipCdkModule { }
