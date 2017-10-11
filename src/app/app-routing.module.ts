import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { IntroComponent } from './pages/intro/intro.component';
import { MainComponent } from './pages/main/main.component';
import { MainScreenComponent } from './pages/main/main-screen/main-screen.component';
import { MainKeyboardComponent } from './pages/main/main-keyboard/main-keyboard.component';
import { ScreenLetterPipe } from './pipes/screen-letter.pipe';

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
    MatButtonModule
  ],
  declarations: [
    IntroComponent,
    MainComponent,
    MainScreenComponent,
    MainKeyboardComponent,
    ScreenLetterPipe
  ],
  exports : [
    RouterModule,
    MatButtonModule
  ]
})
export class AppRoutingModule { }