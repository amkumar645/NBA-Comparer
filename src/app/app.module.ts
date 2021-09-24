import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { ResultComponent } from './result/result.component';
import { PlayerNotFoundComponent } from './player-not-found/player-not-found.component';
import { PlayerService } from './services/player.service';
import { CommonModule } from '@angular/common';
import { ComparerComponent } from './comparer/comparer.component';
import { TotalComparerComponent } from './total-comparer/total-comparer.component';
import { AdvancedComparerComponent } from './advanced-comparer/advanced-comparer.component';
import { HistoricalComponent } from './historical/historical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FindComponent,
    PlayerFormComponent,
    ResultComponent,
    PlayerNotFoundComponent,
    ComparerComponent,
    TotalComparerComponent,
    AdvancedComparerComponent,
    HistoricalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
