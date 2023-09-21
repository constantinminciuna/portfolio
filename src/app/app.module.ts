import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { DoveTrovarmiComponent } from './dove-trovarmi/dove-trovarmi.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TecnologieUtilizzateComponent } from './tecnologie-utilizzate/tecnologie-utilizzate.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiSonoComponent,
    CurriculumComponent,
    DoveTrovarmiComponent,
    HeaderComponent,
    HomePageComponent,
    TecnologieUtilizzateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
