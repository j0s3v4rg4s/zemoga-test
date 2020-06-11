import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "src/app/pages/home/home.component";
import {HowItWorkComponent} from "src/app/pages/how-it-work/how-it-work.component";
import {PastTrialsComponent} from "src/app/pages/past-trials/past-trials.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'how-it-work',
    component: HowItWorkComponent
  },
  {
    path: 'past-trials',
    component: PastTrialsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
