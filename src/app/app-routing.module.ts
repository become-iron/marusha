import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TableComponent } from './table/table.component';
// import { TableItemDetailComponent } from './table-item-detail/table-item-detail.component';
import { SignToTranscriptionComponent } from './sign-to-transcription/sign-to-transcription.component';
import { CorrespondingSymbolComponent } from './corresponding-symbol/corresponding-symbol.component';
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'table/hiragana', component: TableComponent, data: {kana: 'hiragana'} },
  { path: 'table/katakana', component: TableComponent, data: {kana: 'katakana'} },
  { path: 'practice/sign-to-transcription/hiragana', component: SignToTranscriptionComponent, data: {kana: 'hiragana'}  },
  { path: 'practice/sign-to-transcription/katakana', component: SignToTranscriptionComponent, data: {kana: 'katakana'}  },
  // { path: 'practice/transcription-to-sign/:kana', component: null },
  // { path: 'practice/similar-signs/:kana', component: null },
  { path: 'practice/corresponding-symbol/hiragana', component: CorrespondingSymbolComponent, data: {kana: 'hiragana'} },
  { path: 'practice/corresponding-symbol/katakana', component: CorrespondingSymbolComponent, data: {kana: 'katakana'} },
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
