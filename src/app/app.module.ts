import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgToPngComponent } from './svg-to-png/svg-to-png.component';
import { SvgToPngDemoComponent } from './svg-to-png-demo/svg-to-png-demo.component';
import { CoreModule } from './core/core.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SvgToPngComponent,
    SvgToPngDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
