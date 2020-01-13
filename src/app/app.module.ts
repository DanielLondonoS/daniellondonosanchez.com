import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajeriaService } from './mensajeria.service';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MensajeriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
