import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TableComponent } from './table/table.component';
import { TableItemDetailComponent } from './table-item-detail/table-item-detail.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  // { path: 'settings', component: null, pathMatch: 'full' },
  { path: 'table/:kana', component: TableComponent },
  { path: 'table/:kana/:sign', component: TableItemDetailComponent},
  // { path: 'practice/transcription-to-sign/:kana', component: null },
  // { path: 'practice/sign-to-transcription/:kana', component: null },
  // { path: 'practice/similar-signs/:kana', component: null },
  // { path: 'practice/find-a-match/:kana', component: null },
  // { path: 'practice/draw/:kana', component: null },
  { path: '**', redirectTo: '/about' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
