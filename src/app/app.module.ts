import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { NamedisplayComponent } from './namedisplay/namedisplay.component';
import { from } from 'rxjs';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    NamedisplayComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
