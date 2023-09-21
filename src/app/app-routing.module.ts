import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { TecnologieUtilizzateComponent } from './tecnologie-utilizzate/tecnologie-utilizzate.component';
import { DoveTrovarmiComponent } from './dove-trovarmi/dove-trovarmi.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"chi-sono", component: ChiSonoComponent},
  {path:"tecnologie-utilizzate", component: TecnologieUtilizzateComponent},
  {path:"dove-trovarmi", component: DoveTrovarmiComponent},
  {path:"curriculum", component: CurriculumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
