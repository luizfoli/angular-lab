import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipCdkComponent } from './tooltip-cdk.component';


const routes: Routes = [
    {
        path: '',
        component: TooltipCdkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TooltipCdkRoutingModule { }
