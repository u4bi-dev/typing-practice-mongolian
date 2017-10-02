import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';

import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { MainScreenComponent } from './main/main-screen/main-screen.component';
import { MainKeyboardComponent } from './main/main-keyboard/main-keyboard.component';

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
    RouterModule.forRoot(routes),
    MdButtonModule
  ],
  declarations: [
    IntroComponent,
    MainComponent,
    MainScreenComponent,
    MainKeyboardComponent
  ],
  exports : [
    RouterModule,
    MdButtonModule
  ]
})
export class AppRoutingModule { }