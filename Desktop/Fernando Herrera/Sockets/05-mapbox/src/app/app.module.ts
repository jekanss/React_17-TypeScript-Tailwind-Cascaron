import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,   
    SocketIoModule.forRoot(environment.socketConfig), 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
