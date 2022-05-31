import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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

