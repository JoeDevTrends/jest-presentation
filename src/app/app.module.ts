import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortUtil } from './sort-util/sort-util';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SortUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
