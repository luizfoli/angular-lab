import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipCdkComponent } from './tooltip-cdk.component';
import { TooltipCdkRoutingModule } from './tooltip-cdk-routing.module';

@NgModule({
  declarations: [
    TooltipCdkComponent
  ],
  imports: [
    CommonModule,
    TooltipCdkRoutingModule
  ]
})
export class TooltipCdkModule { }
