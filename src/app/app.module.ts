import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GridComponent } from './components/grid/grid.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
    CarouselModule
  ],
  declarations: [
    AppComponent,
    TimelineComponent,
    GridComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

