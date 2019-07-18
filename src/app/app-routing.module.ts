import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
