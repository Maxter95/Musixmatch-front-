import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LyricsServices} from './services/lyrics.services';
import { LyricComponent } from './lyric/lyric.component';
import { ShowLComponent } from './show-l/show-l.component';
import {routing} from './app.routing';

import {CategoryService, ChartModule, ColumnSeriesService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    LyricComponent,
    ShowLComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    routing,
    ChartModule,
    BrowserAnimationsModule
  ],
  providers: [  LyricsServices,CategoryService, ColumnSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
