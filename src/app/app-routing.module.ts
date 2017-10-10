import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
// import { TableItemDetailComponent } from './table-item-detail/table-item-detail.component';
import { SignToTranscriptionComponent } from './sign-to-transcription/sign-to-transcription.component';
import { TranscriptionToSignComponent } from './transcription-to-sign/transcription-to-sign.component';
import { CorrespondingSymbolComponent } from './corresponding-symbol/corresponding-symbol.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { SimilarSignsComponent } from './similiar-signs/similiar-signs.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/table/hiragana', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },

  { path: 'table/hiragana', component: TableComponent, data: {kana: 'hiragana'} },
  { path: 'table/katakana', component: TableComponent, data: {kana: 'katakana'} },

  { path: 'practice/sign-to-transcription/hiragana', component: SignToTranscriptionComponent, data: {kana: 'hiragana'}  },
  { path: 'practice/sign-to-transcription/katakana', component: SignToTranscriptionComponent, data: {kana: 'katakana'}  },

  { path: 'practice/transcription-to-sign/hiragana', component: TranscriptionToSignComponent, data: {kana: 'hiragana'}  },
  { path: 'practice/transcription-to-sign/katakana', component: TranscriptionToSignComponent, data: {kana: 'katakana'}  },

  { path: 'practice/corresponding-symbol/hiragana', component: CorrespondingSymbolComponent, data: {kana: 'hiragana'} },
  { path: 'practice/corresponding-symbol/katakana', component: CorrespondingSymbolComponent, data: {kana: 'katakana'} },

  { path: 'practice/similar-signs/hiragana', component: SimilarSignsComponent, data: {kana: 'hiragana'} },
  { path: 'practice/similar-signs/katakana', component: SimilarSignsComponent, data: {kana: 'katakana'} },

  // { path: 'practice/draw/:kana', component: null },
  { path: '**', redirectTo: '/table/hiragana' },
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
