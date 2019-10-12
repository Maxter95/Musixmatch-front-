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
    BrowserAnimationsModule
  ],
  providers: [  LyricsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
