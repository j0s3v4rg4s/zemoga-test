import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import {HomeComponent} from "src/app/pages/home/home.component";
import {ReactiveFormsModule} from "@angular/forms";
import { PastTrialsComponent } from './pages/past-trials/past-trials.component';
import { HowItWorkComponent } from './pages/how-it-work/how-it-work.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    PastTrialsComponent,
    HowItWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    CardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
