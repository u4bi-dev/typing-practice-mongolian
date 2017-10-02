import { Component, OnInit, HostListener } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-main-keyboard',
  templateUrl: './main-keyboard.component.html',
  styleUrls: ['./main-keyboard.component.css']
})
export class MainKeyboardComponent implements OnInit {

  private textArray : string[];
  private count : number;

  constructor() {

    let text = 'АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯ';
    this.textArray = text.split('');
    this.count = 0;
    
  }

  ngOnInit() {
            
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev:KeyboardEvent) {
         
    let key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!key) return;

    if(key.textContent != this.textArray[this.count]) key.classList.add('send-x');
    else{

      key.classList.add('send-o');
      
      let sound = new Howl({
        src: [`./assets/voice/alphabet/m_${this.count }.mp3`],
        html5 :true
      });

      sound.play();

      this.count !== this.textArray.length-1 ? this.count++ : this.count = 0;

    }

  }


  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
         
    let key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!key) return;

    key.classList.remove('send-o');
    key.classList.remove('send-x');

  }

}
