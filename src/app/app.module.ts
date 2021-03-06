import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';
import { TableItemDetailComponent } from './table-item-detail/table-item-detail.component';
import { CorrespondingSymbolComponent } from './corresponding-symbol/corresponding-symbol.component';
import { ProgressTableComponent } from './progress-table/progress-table.component';
import { SettingsComponent } from './settings/settings.component';
import { SignToTranscriptionComponent } from './sign-to-transcription/sign-to-transcription.component';
import { TranscriptionToSignComponent } from './transcription-to-sign/transcription-to-sign.component';
import { SimilarSignsComponent } from './similiar-signs/similiar-signs.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    AboutComponent,
    TableItemDetailComponent,
    CorrespondingSymbolComponent,
    ProgressTableComponent,
    SettingsComponent,
    SignToTranscriptionComponent,
    TranscriptionToSignComponent,
    SimilarSignsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
