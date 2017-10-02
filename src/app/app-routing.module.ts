import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';

const routes : Routes = [
  {
    path : 'intro', component : IntroComponent
  },
  {
    path : 'main', component : MainComponent
  },  
  {
    path : '', redirectTo : '/intro', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    IntroComponent,
    MainComponent
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }