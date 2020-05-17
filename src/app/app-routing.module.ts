import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
  {
    path: 'tooltip-cdk',
    loadChildren: () => import('./tooltip-cdk/tooltip-cdk.module')
      .then(mod => mod.TooltipCdkModule)
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: '**',
    redirectTo: '/hello'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
