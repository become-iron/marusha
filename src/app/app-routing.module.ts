import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  // { path: 'settings', component: null, pathMatch: 'full' },
  { path: 'table/:kana', component: TableComponent },
  // { path: 'practice/transcription-to-sign/:kana', component: null },
  // { path: 'practice/sign-to-transcription/:kana', component: null },
  // { path: 'practice/similar-signs/:kana', component: null },
  // { path: 'practice/find-a-match/:kana', component: null },
  // { path: 'practice/draw/:kana', component: null },
  { path: '', component: AboutComponent },
  { path: '**', component: AboutComponent }
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
