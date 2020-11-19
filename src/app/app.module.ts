import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { DogViewComponent } from './components/dog-view/dog-view.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import {HttpClientModule} from '@angular/common/http';
import * as Material from '@angular/material';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DogFormComponent,
    DogViewComponent,
    DogListComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    Material.MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmComponent,DogViewComponent]
})
export class AppModule { }
