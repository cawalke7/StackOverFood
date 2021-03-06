import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatGridListModule, MatToolbarModule,
  MatSelectModule, MatInputModule } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodgroupsComponent } from './foodgroups/foodgroups.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { KitchentoolsComponent } from './kitchentools/kitchentools.component';
import { GeneratorComponent } from './generator/generator.component';
import { KitchentoolsDialogComponent } from './kitchentools-dialog/kitchentools-dialog.component';
import { FoodDialogComponent } from './food-dialog/food-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodgroupsComponent,
    ToolbarComponent,
    KitchentoolsComponent,
    GeneratorComponent,
    KitchentoolsDialogComponent,
    FoodDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [
    KitchentoolsDialogComponent,
    FoodDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
