import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatListModule } from '@angular/material/list';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { GenresComponent } from './genres/genres.component';
import { MatPaginatorModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material'
import { MatChipsModule } from '@angular/material/chips';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    DetailModalComponent,
    MoviesComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTreeModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  entryComponents: [DetailModalComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }