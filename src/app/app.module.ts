import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodgroupsComponent } from './foodgroups/foodgroups.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { KitchentoolsComponent } from './kitchentools/kitchentools.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodgroupsComponent,
    ToolbarComponent,
    KitchentoolsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
