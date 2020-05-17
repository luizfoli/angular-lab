import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tooltip-cdk',
    loadChildren: () => import('./tooltip-cdk/tooltip-cdk.module')
      .then(mod => mod.TooltipCdkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
