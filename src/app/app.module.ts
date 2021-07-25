import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { CovidService}  from './services/covid.service';


import { AppComponent } from './app.component';
import { UgandaComponent } from './uganda/uganda.component';
import { PreventionComponent } from './prevention/prevention.component';
import { WorldStatisticsComponent } from './world-statistics/world-statistics.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'

const routes : Routes = [
   {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'uganda', component : UgandaComponent},
  {path: 'global', component: WorldStatisticsComponent},
  {path: 'prevention', component : PreventionComponent},
  {path: 'causes', component :CausesComponent},
  {path: 'symptoms', component : SymptomsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
      UgandaComponent,
      PreventionComponent,
      WorldStatisticsComponent,
      NavigationComponent,
      HomeComponent,
      CausesComponent,
      SymptomsComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
