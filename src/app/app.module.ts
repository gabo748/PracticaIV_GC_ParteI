import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { HalaMadridComponent } from './hala-madrid/hala-madrid.component';
import { CompbComponent } from './compb/compb.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    ProgramacionComponent,
    HalaMadridComponent,
    CompbComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
