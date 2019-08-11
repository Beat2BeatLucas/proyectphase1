import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { Grafico2Component } from './grafico2/grafico2.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    Grafico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
