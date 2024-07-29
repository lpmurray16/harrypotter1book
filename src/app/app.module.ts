import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EReaderComponent } from './ereader/ereader.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    EReaderComponent,
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
