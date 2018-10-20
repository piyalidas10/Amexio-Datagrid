import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import your library
import { AmexioDataModule } from "amexio-ng-extensions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioDataModule, 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
