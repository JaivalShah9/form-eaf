import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import { CommonModule } from '@angular/common';
import {AnimateModule} from 'primeng/animate';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { animate } from '@angular/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    JobportalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('de'),
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
